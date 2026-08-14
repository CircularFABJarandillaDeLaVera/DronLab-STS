(() => {
  const data = window.DRONLAB_BLOQUE;
  const nav = document.getElementById('nav');
  const content = document.getElementById('content');
  const notesKey = 'dronlab_sts_bloque5_profesor_notes';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const list = items => `<ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;

  function renderNav(activeId) {
    nav.innerHTML = `<h2>Bloque 5</h2>${data.pantallas.map(item => `<button class="navbtn ${item.id === activeId ? 'active' : ''}" data-id="${esc(item.id)}">${esc(item.titulo)}</button>`).join('')}`;
    nav.querySelectorAll('.navbtn').forEach(button => button.addEventListener('click', () => render(button.dataset.id)));
  }

  function render(id = data.pantallas[0].id) {
    const item = data.pantallas.find(screen => screen.id === id) || data.pantallas[0];
    renderNav(item.id);
    content.innerHTML = `
      <section class="card hero"><p class="eyebrow">PROFESOR | BLOQUE 5</p><h1>${esc(item.titulo)}</h1><p>Trazabilidad AESA Syllabus STS paginas ${esc(data.meta.paginas_relacionadas)} | Estado ${esc(data.meta.estado)}.</p></section>
      <section class="grid">
        <article class="box"><h3>Contenido de pantalla</h3><p>${esc(item.contenido)}</p></article>
        <article class="box script"><h3>Guion docente</h3><p>${esc(item.docente)}</p></article>
        <article class="box"><h3>Preguntas de control</h3>${list(['Que requisito tecnico aplica aqui?', 'Corresponde a C5, C6 o ambos?', 'Que dato numerico puede caer en examen?', 'Que confusion habitual conviene evitar?'])}</article>
        <article class="box"><h3>Respuestas esperadas</h3>${list(['C5: modo lento 5 m/s, altura, FTS independiente y reduccion de energia.', 'C6: velocidad maxima 50 m/s, altura, velocidad y posicion geografica.', 'Ambos: geoconsciencia C3 y alertas del enlace C2.', 'Baterias: serie suma tension; paralelo suma capacidad.'])}</article>
      </section>
      <section class="card"><h2>Notas locales</h2><textarea id="notes" class="notes" placeholder="Notas de imparticion para esta pantalla."></textarea></section>
    `;
    const notes = document.getElementById('notes');
    const key = `${notesKey}_${item.id}`;
    notes.value = localStorage.getItem(key) || '';
    notes.addEventListener('input', () => localStorage.setItem(key, notes.value));
  }

  render();
})();
