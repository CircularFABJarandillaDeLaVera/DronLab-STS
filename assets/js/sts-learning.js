/* Vistas STS: una misma explicación alimenta aula, alumno y profesor.
   Los ejemplos y las devoluciones permanecen junto al concepto para evitar contradicciones. */
(() => {
  'use strict';
  const view = document.currentScript.dataset.stsView;
  const d = window.DRONLAB_BLOQUE;
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const list = xs => `<ul>${(xs || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const sources = xs => `<p class="sts-sources">${(xs || []).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.titulo)}</a>`).join(' · ')}</p>`;
  const style = document.createElement('style');
  style.textContent = `.sts-example,.sts-check{padding:16px;border:1px solid var(--cf-color-border,#ccd8df);border-radius:12px;margin:14px 0;background:var(--cf-color-surface,#fff);color:var(--cf-color-text,#142b3e);overflow-wrap:anywhere}.sts-example{border-left:5px solid #16a47d}.sts-example th{padding:6px;font-size:.95rem;text-align:center;border:1px solid currentColor}.sts-error{border-left:5px solid #e6a42d;padding-left:14px}.sts-check summary{cursor:pointer;font-weight:700}.sts-sources{font-size:.85rem;overflow-wrap:anywhere}.sts-feedback[hidden]{display:none}.sts-choices{display:grid;gap:8px;margin:12px 0}.sts-choices button{text-align:left;white-space:normal;overflow-wrap:anywhere;padding:12px;border:1px solid var(--cf-color-border,#cad6df);border-radius:8px;background:var(--cf-color-surface,#fff);color:var(--cf-color-text,#142b3e);cursor:pointer;font:inherit}.sts-choices button[aria-pressed=true]{outline:3px solid #087c61;outline-offset:1px}.sts-question{scroll-margin-top:100px}.sts-question h2{font-size:1.2rem}.sts-feedback{border-top:2px solid #16846b;padding-top:14px}.sts-status{font-weight:700}.sts-actions{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.sts-actions button{cursor:pointer;padding:10px;font:inherit}.sts-diagnostic{max-width:1100px;margin:16px auto}.sts-diagnostic article{margin-bottom:10px} .sts-empty{padding:20px} .sts-study{max-width:1100px;margin:auto}.sts-study textarea{display:block;width:100%;min-height:90px;font:inherit;color:inherit;background:var(--cf-color-surface,#fff)}@media print{details>*,details>summary{display:block!important}.sts-feedback[hidden]{display:block}.sts-actions{display:none}}`;
  document.head.append(style);
  function visual(s) {
    if (d?.meta.bloque === 8 && s.id === 'b8-04') return `<div class="sts-example"><h3>Margen mínimo STS-01 sin anclaje</h3><table style="width:100%;border-collapse:collapse"><thead><tr><th>Altura máxima</th><th>MTOM ≤ 10 kg</th><th>MTOM &gt; 10 kg</th></tr></thead><tbody>${[[30,10,20],[60,15,30],[90,20,45],[120,25,60]].map(r=>`<tr>${r.map(x=>`<td style="padding:8px;border-bottom:1px solid currentColor;text-align:center">${x} m</td>`).join('')}</tr>`).join('')}</tbody></table><p>Medido después de la contingencia. Tabla de mínimos; no sustituye la evaluación de condiciones.</p></div>`;
    if (d?.meta.bloque === 8 && s.id === 'b8-02') return `<figure class="sts-example"><svg viewBox="0 0 620 290" role="img" aria-label="Zona terrestre: geografía de vuelo, contingencia y margen adicional" style="width:100%;max-height:290px"><rect x="10" y="10" width="600" height="260" rx="14" fill="#fae8b2" stroke="#765719" stroke-width="2"/><text x="310" y="40" text-anchor="middle" fill="#33270b" font-size="18">Margen de riesgo en tierra</text><rect x="65" y="60" width="490" height="170" rx="12" fill="#bddbe9" stroke="#245677" stroke-width="2"/><text x="310" y="88" text-anchor="middle" fill="#142b45" font-size="18">Zona de contingencia</text><rect x="135" y="110" width="350" height="75" rx="12" fill="#c9eedf" stroke="#17664d" stroke-width="2"/><text x="310" y="153" text-anchor="middle" fill="#103d30" font-size="18">Zona geográfica de vuelo</text><text x="310" y="257" text-anchor="middle" fill="#33270b" font-size="16">Toda esta huella debe quedar controlada</text></svg><figcaption>Vista en planta, sin escala. El margen es adicional a la contingencia.</figcaption></figure>`;
    if (d?.meta.bloque === 7 && s.id === 'b7-03') return `<figure class="sts-example"><svg viewBox="0 0 620 250" role="img" aria-label="Equilibrio de palanca: 100 kg a 25 cm equivalen a 25 kg a 1 m" style="width:100%;max-height:250px"><path d="M50 150H570" stroke="currentColor" stroke-width="6"/><path d="M158 195L175 150L192 195Z" fill="#16a47d"/><rect x="55" y="60" width="105" height="85" fill="#d6eee5" stroke="#17664d" stroke-width="2"/><text x="108" y="108" text-anchor="middle" font-size="22" fill="#103d30">100 kg</text><rect x="485" y="100" width="80" height="45" fill="#bddbe9" stroke="#245677" stroke-width="2"/><text x="525" y="129" text-anchor="middle" font-size="22" fill="#142b45">25 kg</text><text x="110" y="220" text-anchor="middle" fill="currentColor" font-size="18">0,25 m</text><text x="370" y="220" text-anchor="middle" fill="currentColor" font-size="18">1 m</text></svg><figcaption>Esquema sin escala: 100 × 0,25 = 25 × 1 kg·m. Modelo ideal de estática.</figcaption></figure>`;
    return '';
  }
  function example(s) {
    return `${visual(s)}<div class="sts-example"><h3>Ejemplo resuelto</h3><p>${esc(s.ejemplo)}</p></div><p class="sts-error"><b>Error habitual:</b> ${esc(s.error_habitual)}</p><details class="sts-check"><summary>${esc(s.pregunta)}</summary><p><b>Respuesta razonada:</b> ${esc(s.respuesta)}</p></details>${sources(s.fuentes)}`;
  }
  function saveNote(area, key) {
    try { area.value = localStorage.getItem(key) || ''; } catch {}
    area.addEventListener('input', () => { try { localStorage.setItem(key, area.value); } catch {} });
  }
  function presentation() {
    const stage = document.getElementById('stage');
    let current = 0;
    const numericHash = /^#\d+$/.test(location.hash);
    const read = () => {
      if (/^#\d+$/.test(location.hash)) return Math.max(0, Math.min(d.pantallas.length - 1, Number(location.hash.slice(1)) - 1));
      return Math.max(0, d.pantallas.findIndex(s => s.id === location.hash.slice(1)));
    };
    stage.innerHTML = d.pantallas.map((s, i) => `<section class="slide ${i === 0 ? 'active' : ''}" data-id="${esc(s.id)}"><p class="eyebrow">DRONLAB STS · BLOQUE ${d.meta.bloque}</p><h${i === 0 ? '1' : '2'}>${esc(s.titulo)}</h${i === 0 ? '1' : '2'}><p>${esc(s.contenido)}</p>${example(s)}<aside class="notes"><b>Guion docente:</b><p>${esc(s.docente)}</p><label>Notas de clase<textarea data-note="${esc(s.id)}"></textarea></label></aside></section>`).join('');
    stage.querySelectorAll('[data-note]').forEach(a => saveNote(a, `dronlab_sts_bloque${d.meta.bloque}_notes_${a.dataset.note}`));
    const menu = document.getElementById('menuDialog');
    document.getElementById('menuList').innerHTML = d.pantallas.map((s, i) => `<button class="menu-item" data-index="${i}">${esc(s.titulo)}</button>`).join('');
    function go(n) {
      current = Math.max(0, Math.min(d.pantallas.length - 1, n));
      stage.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === current));
      document.getElementById('counter').textContent = `${current + 1} / ${d.pantallas.length}`;
      document.getElementById('progress').style.width = `${(current + 1) / d.pantallas.length * 100}%`;
      const hash = numericHash || d.meta.bloque <= 3 ? String(current + 1) : d.pantallas[current].id;
      if (location.hash !== '#' + hash) history.replaceState(null, '', '#' + hash);
    }
    document.querySelectorAll('[data-index]').forEach(b => b.onclick = () => { go(Number(b.dataset.index)); menu.close(); });
    const full = () => { if (document.fullscreenElement) document.exitFullscreen?.(); else document.documentElement.requestFullscreen?.(); };
    const toggleNotes = () => { document.body.classList.toggle('show-notes'); try { localStorage.setItem(`dronlab_sts_bloque${d.meta.bloque}_notes`, document.body.classList.contains('show-notes') ? '1' : '0'); } catch {} };
    try { if (localStorage.getItem(`dronlab_sts_bloque${d.meta.bloque}_notes`) === '1') document.body.classList.add('show-notes'); } catch {}
    document.getElementById('prev').onclick = () => go(current - 1);
    document.getElementById('next').onclick = () => go(current + 1);
    document.getElementById('btnMenu').onclick = () => menu.showModal();
    document.getElementById('closeMenu').onclick = () => menu.close();
    document.getElementById('btnNotes').onclick = toggleNotes;
    document.getElementById('btnFullscreen').onclick = full;
    window.addEventListener('hashchange', () => go(read()));
    window.addEventListener('keydown', e => {
      // Las teclas de navegación nunca deben interceptar la escritura en notas.
      if (e.target.closest('input,textarea,select,button,summary,[contenteditable]') || menu.open) return;
      if (['ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
      if (['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); go(current - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(d.pantallas.length - 1);
      if (e.key.toLowerCase() === 'n') toggleNotes();
      if (e.key.toLowerCase() === 'm') menu.showModal();
      if (e.key.toLowerCase() === 'f') full();
      if (e.key.toLowerCase() === 'h') { const h=document.getElementById('help'); if (h) {h.classList.add('show');setTimeout(()=>h.classList.remove('show'),2500);} }
    });
    go(read());
  }
  function student() {
    const m = document.getElementById('main');
    const ficha = () => {
      m.innerHTML = `<section class="panel"><h2>Entender, decidir y comprobar</h2><p>${esc(d.objetivo)}</p><p>${esc(d.conexion)}</p></section>` + d.pantallas.map(s => `<article class="panel sts-study" id="${esc(s.id)}"><h2>${esc(s.titulo)}</h2><p>${esc(s.contenido)}</p>${example(s)}</article>`).join('');
    };
    const renderFicha = ficha;
    const withGlossary = () => { renderFicha(); const box=document.createElement('section');box.id='glosario';box.className='panel';box.innerHTML='<h2>Siglas para entender el bloque</h2>'+list(Object.entries(d.glosario || {}).map(([k,v])=>k+': '+v));m.append(box); };
    const mapa = () => { m.innerHTML = `<section class="panel"><h2>Conecta las ideas</h2><p>${esc(d.conexion)}</p><a href="../recursos/mapas/index.html">Explorar el mapa del bloque</a></section>` + d.pantallas.map(s => `<article class="panel"><h2>${esc(s.titulo)}</h2><p>${esc(s.error_habitual)}</p><a href="#${esc(s.id)}" data-back="${esc(s.id)}">Volver a la explicación</a></article>`).join(''); m.querySelectorAll('[data-back]').forEach(a => a.onclick = () => { ficha(); }); };
    document.querySelectorAll('[data-view]').forEach(b => b.onclick = () => b.dataset.view === 'mapa' ? mapa() : withGlossary());
    withGlossary();
    if(location.hash) requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
  }
  function teacher() {
    const nav = document.getElementById('nav'), m = document.getElementById('content');
    function show(i) {
      const s = d.pantallas[i];
      nav.querySelectorAll('button').forEach((b, j) => b.classList.toggle('active', i === j));
      m.innerHTML = `<article class="card hero"><h1>${esc(s.titulo)}</h1><p>${esc(s.contenido)}</p></article><article class="card"><h2>Antes de explicar</h2><p>${esc(s.pregunta)}</p><p>Deja que cada participante decida y justifique antes de mostrar la respuesta. Pide comparar dos argumentos.</p></article><article class="card"><h2>Demostración y devolución</h2>${example(s)}<p><b>Respuesta esperada:</b> ${esc(s.respuesta)}</p><p><b>Cómo reconducir:</b> pide identificar la condición decisiva y contrastarla con el ejemplo.</p><p><b>Transferencia:</b> cambia una condición y pide explicar si cambia la decisión.</p></article><article class="card"><label>Notas locales<textarea id="sts-note" class="notes"></textarea></label></article>`;
      saveNote(document.getElementById('sts-note'),`dronlab_sts_r26_b${d.meta.bloque}_${s.id}`);
    }
    nav.innerHTML = d.pantallas.map((s, i) => `<button class="navbtn" data-lesson="${i}">${esc(s.titulo)}</button>`).join('');
    nav.querySelectorAll('button').forEach(b => b.onclick = () => show(Number(b.dataset.lesson)));
    show(0);
  }
  async function resource(kind) {
    const main = document.getElementById('main');
    try {
      const r = await fetch(`${kind}.json`); if (!r.ok) throw new Error('Carga fallida'); const j = await r.json();
      const items = Array.isArray(j) ? j : j[kind];
      main.innerHTML = `<section class="block-hero block-hero--compact"><h1>${esc(j.titulo || kind)}</h1><p>${items.length} actividades con devolución razonada. Resuelve antes de abrir la solución.</p><p>Actividades de aula; no sustituyen la formación ni la evaluación práctica STS.</p></section>` + items.map(c => kind === 'casos' ? `<article class="card case"><h2>${esc(c.titulo)}</h2><p>${esc(c.contexto)}</p><h3>Decide y justifica</h3><p>${esc(c.situacion_inicial)}</p>${list(c.preguntas_para_el_alumno)}<details class="sts-check"><summary>Consultar solución razonada</summary><p>${esc(c.solucion_razonada)}</p><p><b>Error habitual:</b> ${esc(c.errores_habituales.join(' '))}</p><h3>Para comprobar tu razonamiento</h3>${list(c.criterios_evaluacion)}</details><h3>Cambia una condición</h3><p>${esc(c.transferencia)}</p>${sources(c.fuentes)}</article>` : `<article class="card practice"><h2>${esc(c.titulo)}</h2><p>${esc(c.objetivo)} · ${esc(c.tiempo_estimado)}</p><p>${esc(c.contexto)}</p><h3>Material</h3>${list(c.material_necesario)}<h3>Pasos</h3><ol>${c.instrucciones_paso_a_paso.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><h3>Qué entregar</h3>${list(c.criterios_de_exito)}<details class="sts-check"><summary>Consultar resultado esperado</summary><p>${esc(c.resultado_esperado)}</p><p><b>Error habitual:</b> ${esc(c.errores_habituales.join(' '))}</p></details>${sources(c.fuentes)}</article>`).join('');
    } catch { main.innerHTML = '<section class="card">No se pudo cargar el recurso. Comprueba la conexión y abre el curso mediante un servidor local.</section>'; }
  }
  async function test() {
    const m = document.getElementById('main');
    let questions, filter = 'todas', failedOnly = false, corrected = false;
    const answers = new Map(), failed = new Set();
    const visible = () => questions.filter(q => (filter === 'todas' || q.dificultad === filter) && (!failedOnly || failed.has(q.id)));
    function feedback(q) {
      const a = answers.get(q.id), valid = a === q.respuesta_correcta;
      const chosen = a === undefined ? 'Sin responder' : q.respuestas[a];
      return `<p class="sts-status">${valid ? 'Correcta' : a === undefined ? 'Sin responder' : 'A revisar'}</p><p><b>Tu respuesta:</b> ${esc(chosen)}</p><p><b>Respuesta correcta:</b> ${esc(q.respuestas[q.respuesta_correcta])}</p><p>${esc(q.explicacion)}</p>${q.explicaciones_opciones ? `<details><summary>Por qué las otras opciones no encajan</summary>${list(q.respuestas.map((x,i)=>`${x}: ${q.explicaciones_opciones[i]}`))}</details>` : ''}<p class="sts-error"><b>Error habitual:</b> ${esc(q.error_habitual)}</p><p><a href="../../alumno/index.html${q.leccion_id ? '#'+esc(q.leccion_id) : ''}">Repasar el concepto en la ficha del bloque</a></p>${sources(q.fuentes)}`;
    }
    function render() {
      const items = visible();
      m.innerHTML = `<section class="block-hero block-hero--compact"><h1>Decidir y aprender del error</h1><p>${questions.length} preguntas formativas del bloque · ${items.length} visibles. Responde antes de corregir.</p><p>Preguntas propias o adaptadas; no son un banco oficial de AESA.</p><button class="cf-button cf-button--secondary" type="button" id="sts-failed">${failedOnly ? 'Volver a todas' : 'Repasar falladas'}</button></section><section id="resultado" class="panel" aria-live="polite">${corrected ? 'Corrección visible. Puedes cambiar respuestas y volver a corregir.' : 'Selecciona respuestas y pulsa Corregir.'}</section>`+ (items.length ? items.map((q,i)=>`<article class="panel sts-question" data-id="${esc(q.id)}"><p>${esc(q.id)} · ${esc(q.tema)} · ${esc(q.dificultad)}</p><h2>${i+1}. ${esc(q.pregunta)}</h2><div class="sts-choices" role="group" aria-label="Respuestas de ${esc(q.id)}">${q.respuestas.map((x,j)=>`<button type="button" data-answer="${j}" aria-pressed="${answers.get(q.id) === j}">${esc(x)}</button>`).join('')}</div><div class="sts-feedback" ${corrected ? '' : 'hidden'}>${corrected ? feedback(q) : ''}</div></article>`).join('') : '<p class="sts-empty">No hay preguntas en este filtro. Corrige un intento para guardar las que debes repasar.</p>');
      m.querySelectorAll('[data-answer]').forEach(b => b.onclick = () => {
        const article = b.closest('[data-id]'), id = article.dataset.id;
        answers.set(id,Number(b.dataset.answer));
        article.querySelectorAll('[data-answer]').forEach(x => x.setAttribute('aria-pressed',String(x === b)));
        // Una respuesta cambiada no debe conservar una corrección que ya corresponde al intento anterior.
        const fb=article.querySelector('.sts-feedback');fb.hidden=true;
      });
      document.getElementById('sts-failed').onclick = () => { failedOnly=!failedOnly; corrected=false; render(); };
      document.querySelectorAll('nav [data-filter]').forEach(b => { b.classList.toggle('active',b.dataset.filter === filter); });
    }
    document.querySelectorAll('nav [data-filter]').forEach(b => b.onclick = () => { filter=b.dataset.filter; corrected=false;render(); });
    document.getElementById('corregir').onclick = () => {
      if (!questions) return;
      let correct=0, unanswered=0; const items=visible();
      items.forEach(q => { const a=answers.get(q.id); if (a === q.respuesta_correcta) {correct++;failed.delete(q.id);} else {failed.add(q.id);if(a===undefined)unanswered++;} });
      corrected=true;render();
      document.getElementById('resultado').innerHTML=`<h2>Resultado: ${correct} / ${items.length}</h2><p>${unanswered} sin responder. Revisa las explicaciones y vuelve a justificar la decisión con tus palabras.</p><p>No se califica como aprobado oficial un ejercicio de repaso del bloque.</p>`;
      document.getElementById('resultado').scrollIntoView({block:'start',behavior:'smooth'});
    };
    document.getElementById('reiniciar').onclick=()=>{if(!questions)return;answers.clear();failed.clear();failedOnly=false;corrected=false;render();};
    document.getElementById('print').onclick=()=>window.print();
    try { const r=await fetch('test.json');if(!r.ok)throw new Error();const j=await r.json();questions=Array.isArray(j)?j:j.preguntas;render(); }
    catch {m.innerHTML='<section class="panel">No se pudo cargar el test. Comprueba la conexión y abre el curso mediante un servidor local.</section>';}
  }
  ({presentation, student, teacher, casos:()=>resource('casos'), practicas:()=>resource('practicas'), test}[view] || (()=>{}))();
})();
