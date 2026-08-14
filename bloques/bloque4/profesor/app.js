(() => {
  const data = window.DRONLAB_BLOQUE;
  const nav = document.getElementById('nav');
  const content = document.getElementById('content');
  const notesKey = 'dronlab_sts_bloque4_profesor_notes';

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char]));
  }

  function list(items) {
    return `<ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function renderNav(activeId) {
    nav.innerHTML = `<h2>Bloque 4</h2>${data.pantallas.map(item => `<button class="navbtn ${item.id === activeId ? 'active' : ''}" data-id="${esc(item.id)}">${esc(item.titulo)}</button>`).join('')}`;
    nav.querySelectorAll('.navbtn').forEach(button => button.addEventListener('click', () => render(button.dataset.id)));
  }

  function render(id = data.pantallas[0].id) {
    const item = data.pantallas.find(screen => screen.id === id) || data.pantallas[0];
    renderNav(item.id);
    const complementary = item.id === 'b4-08'
      ? '<article class="box"><h3>Etiqueta academica</h3><p>Contenido complementario oficial identificado en la ingenieria. No pertenece al nucleo Syllabus STS paginas 6-7.</p></article>'
      : '';

    content.innerHTML = `
      <section class="card hero">
        <p class="eyebrow">PROFESOR | BLOQUE 4</p>
        <h1>${esc(item.titulo)}</h1>
        <p>Trazabilidad AESA Syllabus STS paginas ${esc(data.meta.paginas_relacionadas)} | Estado ${esc(data.meta.estado)}.</p>
      </section>
      <section class="grid">
        <article class="box"><h3>Contenido de pantalla</h3><p>${esc(item.contenido)}</p></article>
        <article class="box script"><h3>Guion docente</h3><p>${esc(item.docente)}</p></article>
        <article class="box"><h3>Preguntas de control</h3>${list(['Que concepto operativo aparece aqui?', 'Que mitigacion es tecnica y cual operacional?', 'Como se aplica a STS-01 o STS-02?', 'Que error habitual conviene evitar?'])}</article>
        <article class="box"><h3>Respuestas esperadas</h3>${list(['Usar solo la ingenieria permanente del Bloque 4.', 'Separar nucleo Syllabus paginas 6-7 y contenido complementario.', 'Justificar con riesgo en aire, separacion, VLOS, BVLOS, FTS, observadores o geocaging segun proceda.'])}</article>
        ${complementary}
      </section>
      <section class="card">
        <h2>Notas locales</h2>
        <textarea id="notes" class="notes" placeholder="Notas de imparticion para esta pantalla."></textarea>
      </section>
    `;

    const notes = document.getElementById('notes');
    const key = `${notesKey}_${item.id}`;
    notes.value = localStorage.getItem(key) || '';
    notes.addEventListener('input', () => localStorage.setItem(key, notes.value));
  }

  render();
})();
