(() => {
  const d = window.DRONLAB_BLOQUE;
  const m = document.getElementById('main');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  function ficha() {
    const slides = d.pantallas || [];
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque ${esc(d.meta.bloque)} - ${esc(d.meta.titulo)}</h1><p>Ficha resumen del alumno</p></section>
      <section class="panel columns">
        <div><h2>Conceptos del bloque</h2><ul>${(d.conceptosClave || []).map(item => `<li>${esc(item)}</li>`).join('')}</ul></div>
        <div><h2>Datos criticos</h2><ul>${slides.map(item => `<li>${esc(item.contenido)}</li>`).join('')}</ul></div>
      </section>
      <section class="panel"><h2>Trazabilidad</h2><p>${esc(d.meta.organismo)} | Paginas relacionadas: ${esc(d.meta.paginas_relacionadas)} | Estado ${esc(d.meta.estado)}</p></section>
      <section class="panel"><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(8)}</section>`;
  }

  function mapa() {
    const slides = d.pantallas || [];
    m.innerHTML = `<section class="panel hero"><h1>Mapa mental</h1><p>Vista resumida de dependencias del Bloque ${esc(d.meta.bloque)}.</p></section><section class="panel mindmap"><div class="root">Bloque ${esc(d.meta.bloque)}</div><div class="mapgrid">${slides.map(item => `<article><h2>${esc(item.titulo)}</h2><p>${esc(item.contenido)}</p></article>`).join('')}</div><p><a href="../recursos/mapas/index.html" target="_blank" rel="noopener">Abrir mapa interactivo completo</a></p></section>`;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, mapa }[b.dataset.view]()));
  ficha();
})();
