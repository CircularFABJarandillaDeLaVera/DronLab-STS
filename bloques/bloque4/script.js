(() => {
  const data = window.DRONLAB_BLOQUE;
  const stage = document.getElementById('stage');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const menuDialog = document.getElementById('menuDialog');
  const menuList = document.getElementById('menuList');
  const progress = document.getElementById('progress');
  const counter = document.getElementById('counter');
  const help = document.getElementById('help');
  const notesKey = 'dronlab_sts_bloque4_notes';
  let current = 0;

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function slideTemplate(item, index) {
    const complementary = item.id === 'b4-08'
      ? '<div class="callout"><b>Etiqueta academica:</b> contenido complementario oficial identificado en la ingenieria. No pertenece al nucleo Syllabus STS paginas 6-7.</div>'
      : '';

    if (index === 0) {
      return `
        <section class="slide active" data-id="${esc(item.id)}">
          <div class="hero-grid">
            <div>
              <p class="eyebrow">BLOQUE 4 STS</p>
              <h1>${esc(data.meta.titulo)}</h1>
              <p class="subtitle">${esc(data.meta.subtitulo)}</p>
              <div class="hero-tags"><span>AESA ${esc(data.meta.paginas_relacionadas)}</span><span>${esc(data.meta.estado)}</span><span>STS-01 / STS-02</span></div>
              <div class="institutional-pill"><img src="../../assets/branding/logo-circular-fab.png" alt="">Contenido validado desde ingenieria profunda</div>
            </div>
            <div class="drone-visual" aria-hidden="true"><div class="drone"><div class="arm a1"></div><div class="arm a2"></div><div class="arm a3"></div><div class="arm a4"></div><div class="rotor r1"></div><div class="rotor r2"></div><div class="rotor r3"></div><div class="rotor r4"></div><div class="body"></div><div class="camera"></div></div></div>
          </div>
          <div class="cue">${esc(item.docente)}</div>
          <aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}" placeholder="Anota decisiones, dudas y ejemplos del bloque 4."></textarea></aside>
        </section>`;
    }

    return `
      <section class="slide" data-id="${esc(item.id)}">
        <p class="eyebrow">BLOQUE 4 STS</p>
        <h2>${esc(item.titulo)}</h2>
        <div class="compare compact">
          <article><div class="badge">OBJETIVO</div><h3>${esc(item.titulo)}</h3><p>${esc(item.contenido)}</p></article>
          <article><div class="badge alt">TRAZA</div><h3>Syllabus STS</h3><p>Temario oficial AESA | Paginas relacionadas: ${esc(data.meta.paginas_relacionadas)} | Estado ${esc(data.meta.estado)}</p></article>
        </div>
        ${complementary}
        <div class="callout"><b>Profesor Plus:</b> ${esc(item.docente)}</div>
        <div class="cue">${esc(item.docente)}</div>
        <aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}" placeholder="Anota decisiones, dudas y ejemplos del bloque 4."></textarea></aside>
      </section>`;
  }

  function bindNotes() {
    document.querySelectorAll('textarea[data-note]').forEach(area => {
      const key = `${notesKey}_${area.dataset.note}`;
      area.value = localStorage.getItem(key) || '';
      area.addEventListener('input', () => localStorage.setItem(key, area.value));
    });
  }

  function render() {
    stage.innerHTML = data.pantallas.map(slideTemplate).join('');
    menuList.innerHTML = data.pantallas.map((item, index) => `<button class="menu-item" data-index="${index}"><b>${esc(item.titulo)}</b><small>${esc(item.contenido)}</small></button>`).join('');
    menuList.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      go(Number(button.dataset.index));
      menuDialog.close();
    }));
    bindNotes();
    go(readHashIndex());
  }

  function readHashIndex() {
    const hash = decodeURIComponent(location.hash.replace('#', ''));
    const found = data.pantallas.findIndex(item => item.id === hash);
    return found >= 0 ? found : 0;
  }

  function go(index) {
    current = Math.max(0, Math.min(data.pantallas.length - 1, index));
    document.querySelectorAll('.slide').forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === current));
    const item = data.pantallas[current];
    location.hash = item.id;
    progress.style.width = `${((current + 1) / data.pantallas.length) * 100}%`;
    counter.textContent = `${current + 1} / ${data.pantallas.length}`;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  function toggleNotes() {
    document.body.classList.toggle('show-notes');
    localStorage.setItem(notesKey, document.body.classList.contains('show-notes') ? '1' : '0');
  }

  if (localStorage.getItem(notesKey) === '1') document.body.classList.add('show-notes');
  prev.onclick = () => go(current - 1);
  next.onclick = () => go(current + 1);
  document.getElementById('btnMenu').onclick = () => menuDialog.showModal();
  document.getElementById('closeMenu').onclick = () => menuDialog.close();
  document.getElementById('btnNotes').onclick = toggleNotes;
  document.getElementById('btnFullscreen').onclick = toggleFullscreen;
  window.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (['arrowright', 'pagedown', ' '].includes(key)) { event.preventDefault(); go(current + 1); }
    if (['arrowleft', 'pageup'].includes(key)) { event.preventDefault(); go(current - 1); }
    if (key === 'home') go(0);
    if (key === 'end') go(data.pantallas.length - 1);
    if (key === 'm') menuDialog.open ? menuDialog.close() : menuDialog.showModal();
    if (key === 'n') toggleNotes();
    if (key === 'f') toggleFullscreen();
    if (key === 'h') {
      help.classList.add('show');
      window.setTimeout(() => help.classList.remove('show'), 2500);
    }
  });
  window.addEventListener('hashchange', () => go(readHashIndex()));

  render();
})();
