(() => {
  const d = window.DRONLAB_BLOQUE;
  const m = document.getElementById('main');

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function ficha() {
    const slides = d.pantallas || [];
    m.innerHTML = `
      <section class="panel hero"><h1>Bloque ${esc(d.bloque.numero)} STS - ${esc(d.bloque.titulo)}</h1><p>Ficha resumen del alumno</p></section>
      <section class="panel columns">
        <div><h2>Conceptos del bloque</h2><ul>${slides.map(item => `<li>${esc(item.titulo)}</li>`).join('')}</ul></div>
        <div><h2>Datos criticos</h2><ul><li>Categoria especifica basada en riesgo.</li><li>SORA, PDRA y escenarios STS.</li><li>Declaracion operacional.</li><li>STS-01 en VLOS con C5.</li><li>STS-02 en BVLOS con C6 y observadores.</li><li>Zonas P, R y D.</li><li>AIP, AIC, NOTAM y ENAIRE Drones.</li></ul></div>
      </section>
      <section class="panel columns">
        <div><h2>Resumen por pantalla</h2><ul>${slides.map(item => `<li><b>${esc(item.titulo)}:</b> ${esc(item.contenido)}</li>`).join('')}</ul></div>
        <div><h2>Trazabilidad</h2><p>${esc(d.trazabilidad.organismo)} · Paginas relacionadas: ${esc(d.trazabilidad.paginas_relacionadas)} · Estado ${esc(d.trazabilidad.estado)}</p></div>
      </section>
      <section class="panel"><h2>Mis notas</h2>${'<div class="line"></div>'.repeat(8)}</section>
    `;
  }

  function mapa() {
    const slides = d.pantallas || [];
    m.innerHTML = `
      <section class="panel hero"><h1>Mapa mental</h1><p>Vista resumida de dependencias del Bloque ${esc(d.bloque.numero)} STS.</p></section>
      <section class="panel mindmap">
        <div class="root">Bloque ${esc(d.bloque.numero)} STS</div>
        <div class="mapgrid">${slides.map(item => `<article><h2>${esc(item.titulo)}</h2><p>${esc(item.contenido)}</p></article>`).join('')}</div>
        <p><a href="../recursos/mapas/index.html" target="_blank" rel="noopener">Abrir mapa interactivo completo</a></p>
      </section>
    `;
  }

  document.querySelectorAll('nav button[data-view]').forEach(b => b.onclick = () => ({ ficha, mapa }[b.dataset.view]()));
  ficha();
})();
