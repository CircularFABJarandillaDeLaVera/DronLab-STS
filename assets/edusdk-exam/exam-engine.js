(() => {
  const app = document.getElementById('examApp');
  const configUrl = app?.dataset.config || 'exam-config.json';
  let config;
  let bank = [];
  let session = null;
  let timer = null;

  const stateKey = id => `edusdk_exam_${id}_state`;
  const historyKey = id => `edusdk_exam_${id}_history`;

  const $ = sel => document.querySelector(sel);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const shuffle = items => [...items].sort(() => Math.random() - 0.5);
  const questionKey = q => `${q.bloque || q._block || q.block || 'unknown'}:${q.id}`;

  async function loadJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} (${res.status})`);
    return res.json();
  }

  function normalizeDifficulty(value) {
    const raw = String(value || 'media').toLowerCase();
    if (['facil', 'fácil', 'baja'].includes(raw)) return 'facil';
    if (['dificil', 'difícil', 'alta'].includes(raw)) return 'dificil';
    return 'media';
  }

  function normalizeQuestion(item, source, index) {
    const answers = item.respuestas || item.opciones || item.answers || [];
    const correct = Number.isInteger(item.respuesta_correcta) ? item.respuesta_correcta :
      Number.isInteger(item.correcta) ? item.correcta :
      Number.isInteger(item.correct) ? item.correct : 0;
    return {
      id: item.id || `${source.block}-${index + 1}`,
      block: source.block,
      blockTitle: source.title || `Bloque ${source.block}`,
      question: item.pregunta || item.question || '',
      answers,
      correct,
      explanation: item.explicacion || item.explanation || '',
      commonError: item.error_habitual || item.error || '',
      concept: item.referencia_concepto || item.concepto || item.tema || '',
      topic: item.tema || item.topic || source.title || '',
      subtopic: item.subtema || '',
      difficulty: normalizeDifficulty(item.dificultad)
    };
  }

  function extractQuestions(payload) {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload.preguntas)) return payload.preguntas;
    if (Array.isArray(payload.questions)) return payload.questions;
    if (Array.isArray(payload.test)) return payload.test;
    return [];
  }

  async function loadBank() {
    const chunks = await Promise.all((config.question_banks || []).map(async source => {
      try {
        const payload = await loadJson(source.url);
        return extractQuestions(payload).map((item, i) => normalizeQuestion(item, source, i));
      } catch (error) {
        console.warn('No se pudo cargar banco', source.url, error);
        return [];
      }
    }));
    bank = chunks.flat().filter(q => q.question && q.answers.length >= 2);
  }

  function getHistory() {
    try { return JSON.parse(localStorage.getItem(historyKey(config.course.id)) || '[]'); }
    catch { return []; }
  }

  function saveHistory(entry) {
    const history = [entry, ...getHistory()].slice(0, 30);
    localStorage.setItem(historyKey(config.course.id), JSON.stringify(history));
  }

  function getStoredState() {
    try { return JSON.parse(localStorage.getItem(stateKey(config.course.id)) || '{}'); }
    catch { return {}; }
  }

  function setStoredState(next) {
    localStorage.setItem(stateKey(config.course.id), JSON.stringify(next));
  }

  function pickQuestions(mode, filter = {}) {
    const count = config.exam.question_count;
    let pool = [...bank];
    if (filter.failedOnly) {
      const failed = new Set(getHistory().flatMap(h => h.failedIds || []));
      pool = pool.filter(q => failed.has(questionKey(q)));
    }
    if (filter.block) pool = pool.filter(q => Number(q.block) === Number(filter.block));

    const stored = getStoredState();
    const recent = new Set((stored.recentQuestions || []).slice(0, config.selection?.recent_memory || 80));
    const fresh = pool.filter(q => !recent.has(questionKey(q)));
    if (fresh.length >= count) pool = fresh;

    const blockDistribution = config.selection?.block_distribution || {};
    const distribution = config.selection?.difficulty_distribution || {};
    const selected = [];
    Object.entries(blockDistribution).forEach(([block, ratio]) => {
      const target = Math.max(1, Math.round(count * Number(ratio)));
      const blockPool = pool.filter(q => Number(q.block) === Number(block));
      const blockSelected = [];
      Object.entries(distribution).forEach(([difficulty, diffRatio]) => {
        const diffTarget = Math.round(target * Number(diffRatio));
        blockSelected.push(...shuffle(blockPool.filter(q => q.difficulty === difficulty)).slice(0, diffTarget));
      });
      shuffle(blockPool).forEach(q => {
        if (blockSelected.length < target && !blockSelected.some(s => questionKey(s) === questionKey(q))) blockSelected.push(q);
      });
      blockSelected.slice(0, target).forEach(q => {
        if (!selected.some(s => questionKey(s) === questionKey(q))) selected.push(q);
      });
    });
    const byDifficulty = Object.entries(distribution);
    byDifficulty.forEach(([difficulty, ratio]) => {
      if (selected.length >= count) return;
      const target = Math.round(count * Number(ratio));
      shuffle(pool.filter(q => q.difficulty === difficulty)).forEach(q => {
        const sameDifficulty = selected.filter(s => s.difficulty === difficulty).length;
        if (selected.length < count && sameDifficulty < target && !selected.some(s => questionKey(s) === questionKey(q))) selected.push(q);
      });
    });
    shuffle(pool).forEach(q => {
      if (selected.length < count && !selected.some(s => questionKey(s) === questionKey(q))) selected.push(q);
    });
    return shuffle(selected).slice(0, Math.min(count, selected.length));
  }

  function start(mode, filter = {}) {
    const questions = pickQuestions(mode, filter);
    session = {
      mode,
      questions,
      answers: Array(questions.length).fill(null),
      index: 0,
      startedAt: Date.now(),
      finished: false,
      showFeedback: false,
      attempt: mode === 'simulacro'
        ? ((getStoredState().simulatedAttempt || 0) >= config.exam.simulated_attempts ? 1 : (getStoredState().simulatedAttempt || 0) + 1)
        : null
    };
    if (mode === 'simulacro') {
      const stored = getStoredState();
      setStoredState({...stored, simulatedAttempt: session.attempt});
    }
    renderExam();
    runTimer();
  }

  function finish() {
    session.finished = true;
    clearInterval(timer);
    const result = calculate();
    const stored = getStoredState();
    setStoredState({
      ...stored,
      recentQuestions: [...session.questions.map(questionKey), ...(stored.recentQuestions || [])].slice(0, config.selection?.recent_memory || 80)
    });
    saveHistory(result);
    renderResults(result);
  }

  function calculate() {
    const elapsed = Math.max(0, Math.round((Date.now() - session.startedAt) / 1000));
    let correct = 0, wrong = 0, blank = 0;
    const blocks = {};
    const failedIds = [];
    session.questions.forEach((q, i) => {
      blocks[q.block] ||= {title: q.blockTitle, total: 0, correct: 0, wrong: 0, blank: 0};
      blocks[q.block].total++;
      if (session.answers[i] === null) { blank++; blocks[q.block].blank++; failedIds.push(questionKey(q)); }
      else if (session.answers[i] === q.correct) { correct++; blocks[q.block].correct++; }
      else { wrong++; blocks[q.block].wrong++; failedIds.push(questionKey(q)); }
    });
    const percent = session.questions.length ? Math.round((correct / session.questions.length) * 100) : 0;
    return {
      mode: session.mode,
      date: new Date().toISOString(),
      attempt: session.attempt,
      total: session.questions.length,
      correct,
      wrong,
      blank,
      percent,
      passed: correct >= config.exam.pass_correct && percent >= config.exam.pass_percent,
      elapsed,
      blocks,
      failedIds
    };
  }

  function timeLeft() {
    if (session.mode !== 'simulacro' && !config.study_mode?.time_limit_enabled) return null;
    const limit = Number(config.exam.time_minutes || 0) * 60;
    return Math.max(0, limit - Math.round((Date.now() - session.startedAt) / 1000));
  }

  function formatTime(seconds) {
    const s = Math.max(0, Number(seconds || 0));
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }

  function runTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!session || session.finished) return;
      const left = timeLeft();
      const node = $('#timer');
      if (node) node.textContent = left === null ? 'Sin limite' : formatTime(left);
      if (left === 0) finish();
    }, 1000);
  }

  function renderLayout(content) {
    app.innerHTML = `
      <header class="exam-top">
        <img src="${esc(config.course.logo_url)}" alt="Circular FAB">
        <div><b>${esc(config.course.title)}</b><span>${esc(config.course.subtitle || 'Examen final')}</span></div>
        <div class="top-actions">
          <a class="btn" href="${esc(config.course.home_url || '../inicio.html')}">Inicio</a>
          <button class="btn" id="fullscreenBtn">Pantalla completa</button>
        </div>
      </header>
      ${content}
    `;
    $('#fullscreenBtn')?.addEventListener('click', () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    });
  }

  function renderHome() {
    const history = getHistory();
    renderLayout(`
      <section class="hero">
        <h1>Motor de Evaluacion y Simulacion</h1>
        <p>${esc(config.messages?.simulation_notice || 'Simulacion formativa del examen final del curso.')}</p>
      </section>
      <section class="mode-grid">
        <button class="mode-card" id="studyMode"><h2>Modo estudio</h2><p>Intentos ilimitados, explicaciones, errores habituales, repeticion por bloque y preguntas falladas.</p></button>
        <button class="mode-card" id="simMode"><h2>Simulacro oficial</h2><p>${config.exam.question_count} preguntas, ${config.exam.time_minutes} minutos, ${config.exam.pass_percent}% para aprobar. Intento simulado.</p></button>
      </section>
      <section class="panel question-card">
        <h2>Banco cargado</h2>
        <p>${bank.length} preguntas disponibles desde ${config.question_banks.length} bancos declarados.</p>
        <div class="question-actions">
          <button class="btn" id="failedOnly">Repetir falladas</button>
          <select class="btn" id="blockSelect"><option value="">Repetir por bloque</option>${(config.block_links || []).map(b => `<option value="${b.block}">${esc(b.title)}</option>`).join('')}</select>
        </div>
      </section>
      <section class="panel question-card">
        <h2>Historial</h2>
        <div class="history-list">${history.slice(0, 6).map(h => `<div class="history-item">${esc(h.mode)} · ${h.percent}% · ${h.correct}/${h.total} · ${formatTime(h.elapsed)}</div>`).join('') || '<p>No hay intentos guardados todavia.</p>'}</div>
      </section>
    `);
    $('#studyMode').onclick = () => start('estudio');
    $('#simMode').onclick = () => start('simulacro');
    $('#failedOnly').onclick = () => start('estudio', {failedOnly: true});
    $('#blockSelect').onchange = e => { if (e.target.value) start('estudio', {block: e.target.value}); };
  }

  function renderExam() {
    const q = session.questions[session.index];
    const selected = session.answers[session.index];
    const immediate = session.mode === 'estudio' && config.study_mode?.immediate_feedback && selected !== null;
    const progress = session.questions.length ? ((session.index + 1) / session.questions.length) * 100 : 0;
    renderLayout(`
      <section class="exam-bar">
        <span class="pill">${session.mode === 'simulacro' ? `Intento ${session.attempt} de ${config.exam.simulated_attempts}` : 'Modo estudio'}</span>
        <span class="pill" id="timer">${timeLeft() === null ? 'Sin limite' : formatTime(timeLeft())}</span>
        <div class="progress-wrap"><div class="progress" style="width:${progress}%"></div></div>
        <span class="pill">${session.index + 1} / ${session.questions.length}</span>
      </section>
      <section class="panel question-card">
        <div class="question-meta">
          <span class="pill">${esc(q.blockTitle)}</span>
          <span class="pill">${esc(q.difficulty)}</span>
          <span class="pill">${esc(q.concept)}</span>
        </div>
        <h2>${esc(q.question)}</h2>
        <div class="answers">
          ${q.answers.map((answer, i) => `<button class="answer ${selected === i ? 'selected' : ''} ${immediate && i === q.correct ? 'correct' : ''} ${immediate && selected === i && selected !== q.correct ? 'wrong' : ''}" data-answer="${i}">${esc(answer)}</button>`).join('')}
        </div>
        ${immediate ? `<div class="feedback"><b>Explicacion:</b> ${esc(q.explanation)}<br><b>Error habitual:</b> ${esc(q.commonError)}<br><b>Referencia interna:</b> ${esc(q.concept || q.topic)}</div>` : ''}
        <div class="question-actions">
          <button class="btn" id="prevQuestion">Anterior</button>
          <button class="btn warn" id="finishExam">Finalizar</button>
          <button class="btn primary" id="nextQuestion">${session.index === session.questions.length - 1 ? 'Ver resultados' : 'Siguiente'}</button>
        </div>
      </section>
    `);
    document.querySelectorAll('.answer').forEach(btn => {
      btn.onclick = () => {
        session.answers[session.index] = Number(btn.dataset.answer);
        renderExam();
      };
    });
    $('#prevQuestion').onclick = () => { session.index = Math.max(0, session.index - 1); renderExam(); };
    $('#nextQuestion').onclick = () => {
      if (session.index === session.questions.length - 1) finish();
      else { session.index++; renderExam(); }
    };
    $('#finishExam').onclick = finish;
  }

  function renderResults(result) {
    const exhausted = result.mode === 'simulacro' && !result.passed && result.attempt >= config.exam.simulated_attempts;
    const weakBlocks = Object.entries(result.blocks).filter(([, b]) => b.correct / Math.max(1, b.total) < 0.75);
    renderLayout(`
      <section class="hero">
        <h1>${result.passed ? 'APTO' : 'NO APTO'}</h1>
        <p>${result.correct}/${result.total} correctas · ${result.percent}% · tiempo empleado ${formatTime(result.elapsed)}</p>
      </section>
      ${exhausted ? `<section class="notice">${esc(config.messages?.attempts_exhausted)}<div style="margin-top:12px"><button class="btn primary" id="newEnrollment">${esc(config.messages?.new_enrollment || 'Nueva inscripcion simulada')}</button></div></section>` : ''}
      <section class="stats-grid">
        <div class="stat"><b>${result.correct}</b><span>Acertadas</span></div>
        <div class="stat"><b>${result.wrong}</b><span>Falladas</span></div>
        <div class="stat"><b>${result.blank}</b><span>En blanco</span></div>
        <div class="stat"><b>${getHistory().length}</b><span>Simulacros/estudios</span></div>
      </section>
      <section class="review-grid" style="margin-top:16px">
        <div class="panel question-card"><h2>Rendimiento por bloque</h2>${Object.entries(result.blocks).map(([id, b]) => `<div class="block-row"><span>${esc(b.title)} · ${b.correct}/${b.total}</span><a class="btn" href="${esc((config.block_links || []).find(x => Number(x.block) === Number(id))?.url || '#')}">Ir al bloque</a></div>`).join('')}</div>
        <div class="panel question-card"><h2>Recomendaciones</h2>${weakBlocks.length ? weakBlocks.map(([id, b]) => `<p>Te recomendamos repasar ${esc(b.title)}.</p><a class="btn primary" href="${esc((config.block_links || []).find(x => Number(x.block) === Number(id))?.url || '#')}">Ir al Bloque ${esc(id)}</a>`).join('') : '<p>Fortaleza general: rendimiento equilibrado en los bloques evaluados.</p>'}<div class="question-actions"><button class="btn" id="retryFailed">Repetir falladas</button><button class="btn primary" id="homeAgain">Volver al inicio</button></div></div>
      </section>
    `);
    $('#newEnrollment')?.addEventListener('click', () => {
      const stored = getStoredState();
      setStoredState({...stored, simulatedAttempt: 0});
      start('simulacro');
    });
    $('#retryFailed')?.addEventListener('click', () => start('estudio', {failedOnly: true}));
    $('#homeAgain')?.addEventListener('click', renderHome);
  }

  async function init() {
    try {
      config = await loadJson(configUrl);
      await loadBank();
      renderHome();
    } catch (error) {
      app.innerHTML = `<section class="panel question-card"><h1>No se pudo iniciar el motor</h1><p>${esc(error.message)}</p></section>`;
    }
  }

  init();
})();
