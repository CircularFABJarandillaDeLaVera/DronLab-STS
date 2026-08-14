(() => {
  const data = window.DRONLAB_BLOQUE;
  const stage = document.getElementById('stage');
  const menuDialog = document.getElementById('menuDialog');
  const menuList = document.getElementById('menuList');
  const progress = document.getElementById('progress');
  const counter = document.getElementById('counter');
  const help = document.getElementById('help');
  const notesKey = 'dronlab_sts_bloque5_notes';
  let current = 0;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  function slideTemplate(item, index) {
    if (index === 0) {
      return `<section class="slide active" data-id="${esc(item.id)}"><div class="hero-grid"><div><p class="eyebrow">BLOQUE 5 STS</p><h1>${esc(data.meta.titulo)}</h1><p class="subtitle">${esc(data.meta.subtitulo)}</p><div class="hero-tags"><span>AESA ${esc(data.meta.paginas_relacionadas)}</span><span>${esc(data.meta.estado)}</span><span>C5 / C6</span></div></div><div class="tech-visual" aria-hidden="true"><div class="chip"><b>C5/C6</b><span>FTS | C2 | Geocaging | Baterias</span></div></div></div><div class="cue">${esc(item.docente)}</div><aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}"></textarea></aside></section>`;
    }
    return `<section class="slide" data-id="${esc(item.id)}"><p class="eyebrow">BLOQUE 5 STS</p><h2>${esc(item.titulo)}</h2><div class="compare compact"><article><div class="badge">OBJETIVO</div><h3>${esc(item.titulo)}</h3><p>${esc(item.contenido)}</p></article><article><div class="badge alt">TRAZA</div><h3>Syllabus STS</h3><p>Temario oficial AESA | Paginas relacionadas: ${esc(data.meta.paginas_relacionadas)} | Estado ${esc(data.meta.estado)}</p></article></div><div class="callout"><b>Profesor Plus:</b> ${esc(item.docente)}</div><div class="cue">${esc(item.docente)}</div><aside class="notes"><b>Notas de clase</b><textarea data-note="${esc(item.id)}"></textarea></aside></section>`;
  }

  function bindNotes() {
    document.querySelectorAll('textarea[data-note]').forEach(area => {
      const key = `${notesKey}_${area.dataset.note}`;
      area.value = localStorage.getItem(key) || '';
      area.addEventListener('input', () => localStorage.setItem(key, area.value));
    });
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
    counter.textContent = `${current + 1}/${data.pantallas.length}`;
  }

  function render() {
    stage.innerHTML = data.pantallas.map(slideTemplate).join('');
    menuList.innerHTML = data.pantallas.map((item, index) => `<button class="menu-item" data-index="${index}"><b>${esc(item.titulo)}</b><small>${esc(item.contenido)}</small></button>`).join('');
    menuList.querySelectorAll('button').forEach(button => button.addEventListener('click', () => { go(Number(button.dataset.index)); menuDialog.close(); }));
    bindNotes();
    go(readHashIndex());
  }

  document.getElementById('prevBtn').addEventListener('click', () => go(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => go(current + 1));
  document.getElementById('menuBtn').addEventListener('click', () => menuDialog.showModal());
  document.getElementById('closeMenu').addEventListener('click', () => menuDialog.close());
  document.getElementById('notesBtn').addEventListener('click', () => document.body.classList.toggle('show-notes'));
  document.getElementById('fullscreenBtn').addEventListener('click', () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());
  document.getElementById('resetBtn').addEventListener('click', () => go(0));
  window.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') go(current + 1);
    if (event.key === 'ArrowLeft') go(current - 1);
    if (event.key.toLowerCase() === 'm') menuDialog.showModal();
    if (event.key.toLowerCase() === 'n') document.body.classList.toggle('show-notes');
    if (event.key === '?') { help.classList.add('show'); window.setTimeout(() => help.classList.remove('show'), 3200); }
  });
  window.addEventListener('hashchange', () => go(readHashIndex()));
  render();
})();
