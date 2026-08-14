(() => {
  const d = window.DRONLAB_BLOQUE;
  const nav = document.getElementById('nav');
  const c = document.getElementById('content');
  const slides = d.pantallas || d.slides || [];

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function list(items = []) {
    return `<ul>${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function show(i) {
    const s = slides[i];
    document.querySelectorAll('.navbtn').forEach((b, n) => b.classList.toggle('active', n === i));
    const key = `dronlab_sts_b1_nota_${s.id}`;
    const saved = localStorage.getItem(key) || '';
    c.innerHTML = `
      <article class="card hero">
        <div class="tags"><span class="tag">Pantalla ${esc(s.id)}</span><span class="tag">Bloque 1 STS</span><span class="tag">${esc(d.trazabilidad.estado)}</span></div>
        <h1>${esc(s.titulo)}</h1>
        <p>${esc(s.contenido)}</p>
      </article>
      <article class="card script"><h2>Que decir</h2><p>${esc(s.docente || s.contenido)}</p></article>
      <div class="grid">
        <article class="card box"><h3>Preguntas</h3>${list(['Que decision operacional cambia con este concepto?', 'Que error conviene evitar en este punto?'])}</article>
        <article class="card box"><h3>Respuestas esperadas</h3>${list(['Respuesta apoyada en la ingenieria STS validada.', 'Referencia a paginas 3-4 del Syllabus STS cuando proceda.'])}</article>
        <article class="card box"><h3>Error habitual</h3><p>Mezclar declaracion, autorizacion, STS, PDRA, SORA o responsabilidades operativas.</p></article>
        <article class="card box"><h3>Como reconducir</h3><p>Volver al concepto de riesgo, escenario aplicable y trazabilidad AESA paginas 3-4.</p></article>
        <article class="card box"><h3>Demostracion</h3><p>Plantear un caso breve y pedir al alumnado que identifique escenario, fuente o responsabilidad.</p></article>
        <article class="card box"><h3>Material</h3><p>Aula, Zona Alumno, mapa mental, flashcards, test, casos, practicas y guias rapidas.</p></article>
        <article class="card box"><h3>Dinamica</h3><p>Preguntar, dejar decidir, corregir con el concepto y cerrar con una frase de examen.</p></article>
        <article class="card box"><h3>Trazabilidad</h3><p>${esc(d.trazabilidad.organismo)} · Paginas ${esc(d.trazabilidad.paginas_relacionadas)} · ${esc(d.trazabilidad.estado)}</p></article>
      </div>
      <article class="card"><h2>Mis notas</h2><textarea id="note" class="notes">${esc(saved)}</textarea></article>
    `;
    document.getElementById('note').oninput = e => localStorage.setItem(key, e.target.value);
  }

  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'navbtn';
    b.textContent = `${s.id}. ${s.titulo}`;
    b.onclick = () => show(i);
    nav.appendChild(b);
  });
  show(0);
})();
