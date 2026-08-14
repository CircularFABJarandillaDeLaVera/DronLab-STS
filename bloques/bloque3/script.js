(() => {
  const data = window.DRONLAB_BLOQUE;
  const stage = document.getElementById('stage');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  const menu = document.getElementById('menuDialog');
  const menuList = document.getElementById('menuList');
  const help = document.getElementById('help');
  const notesKey = 'dronlab_sts_bloque3_notes';
  let index = Math.max(0, parseInt(location.hash.replace('#', ''), 10) - 1 || 0);

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderSlide(slide, i) {
    const title = slide.titulo;
    const objective = slide.objetivo || slide.contenido;
    const content = slide.contenido || slide.resumen || '';
    const teacher = slide.docente || slide.guion || 'Guiar la pantalla con preguntas breves.';
    const body = i === 0
      ? `<div class="hero-grid"><div class="hero-copy"><p class="eyebrow">DRONLAB STS</p><h1>${escapeHtml(title)}</h1><p class="subtitle">${escapeHtml(objective)}</p><div class="institutional-pill"><img src="../../assets/branding/logo-circular-fab.png" alt=""><span>Circular FAB Jarandilla de la Vera</span></div><div class="hero-tags"><span>FTS</span><span>Geocaging</span><span>Contingencia</span><span>ERP</span></div></div><div class="drone-visual" aria-label="Diagrama STS"><div class="system-card"><span class="icon">STS</span><b>Bloque 3</b><small>Procedimientos</small></div></div></div>`
      : `<p class="eyebrow">BLOQUE 3 STS</p><h2>${escapeHtml(title)}</h2><div class="compare compact"><article><div class="badge">OBJETIVO</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(content)}</p></article><article><div class="badge alt">TRAZA</div><h3>Syllabus STS</h3><p>Temario oficial AESA · Paginas relacionadas: ${escapeHtml(data.trazabilidad.paginas_relacionadas)} · Estado ${escapeHtml(data.trazabilidad.estado)}</p></article></div><div class="callout"><b>Profesor Plus:</b> ${escapeHtml(teacher)}</div>`;
    return `
      <section class="slide ${i === 0 ? 'active slide-hero' : ''}" data-title="${escapeHtml(title)}" data-section="Bloque 3 STS">
        ${body}
        <div class="cue">${escapeHtml(teacher)}</div>
        <aside class="notes">
          <b>Que decir:</b> ${escapeHtml(content)}<br>
          <b>Preguntas:</b> Es pre-vuelo, contingencia, emergencia o ERP?<br>
          <b>Respuestas:</b> Vincular la accion con FTS, ID remota, geocaging, zona terrestre controlada o ERP.<br>
          <b>Error:</b> Confundir STS-01 con STS-02 o contingencia con emergencia.<br>
          <b>Reconducir:</b> Volver a la trazabilidad AESA paginas 5-6.
        </aside>
      </section>
    `;
  }

  function buildSlides() {
    stage.innerHTML = (data.pantallas || data.slides || []).map(renderSlide).join('');
  }

  function slides() {
    return [...document.querySelectorAll('.slide')];
  }

  function render() {
    const all = slides();
    index = Math.min(all.length - 1, Math.max(0, index));
    all.forEach((s, i) => s.classList.toggle('active', i === index));
    counter.textContent = `${index + 1} / ${all.length}`;
    progress.style.width = `${((index + 1) / all.length) * 100}%`;
    location.hash = String(index + 1);
    document.title = `${index + 1}. ${all[index].dataset.title} - DronLab STS Bloque 3`;
  }

  function go(delta) {
    index += delta;
    render();
  }

  function buildMenu() {
    menuList.innerHTML = '';
    slides().forEach((slide, i) => {
      const b = document.createElement('button');
      b.className = 'menu-item';
      b.innerHTML = `<b>${i + 1}. ${slide.dataset.title}</b><small>${slide.dataset.section}</small>`;
      b.onclick = () => { index = i; render(); menu.close(); };
      menuList.appendChild(b);
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  function setupNotesStorage() {
    const saved = localStorage.getItem(notesKey);
    if (saved === '1') document.body.classList.add('show-notes');
    document.getElementById('btnNotes').onclick = () => {
      document.body.classList.toggle('show-notes');
      localStorage.setItem(notesKey, document.body.classList.contains('show-notes') ? '1' : '0');
    };
  }

  buildSlides();
  buildMenu();
  setupNotesStorage();
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);
  document.getElementById('btnMenu').onclick = () => menu.showModal();
  document.getElementById('closeMenu').onclick = () => menu.close();
  document.getElementById('btnFullscreen').onclick = toggleFullscreen;

  window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    if (['arrowright', 'pagedown', ' '].includes(key)) { e.preventDefault(); go(1); }
    if (['arrowleft', 'pageup'].includes(key)) { e.preventDefault(); go(-1); }
    if (key === 'home') { index = 0; render(); }
    if (key === 'end') { index = slides().length - 1; render(); }
    if (key === 'm') menu.open ? menu.close() : menu.showModal();
    if (key === 'f') toggleFullscreen();
    if (key === 'h') {
      help.classList.add('show');
      setTimeout(() => help.classList.remove('show'), 2500);
    }
  });

  window.addEventListener('hashchange', () => {
    const n = parseInt(location.hash.replace('#', ''), 10);
    if (Number.isFinite(n) && n >= 1 && n <= slides().length) { index = n - 1; render(); }
  });

  render();
})();
