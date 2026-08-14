(function () {
  const title = document.getElementById("caseTitle");
  const context = document.getElementById("caseContext");
  const body = document.getElementById("caseBody");
  const meta = document.getElementById("caseMeta");
  const counter = document.getElementById("caseCounter");
  const prev = document.getElementById("prevCase");
  const next = document.getElementById("nextCase");
  let cases = [];
  let index = 0;

  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  const list = items => `<ul>${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;

  function render() {
    const item = cases[index];
    if (!item) return;
    title.textContent = item.titulo;
    context.textContent = item.contexto;
    body.innerHTML = `
      <h2>Situacion inicial</h2><p>${esc(item.situacion_inicial)}</p>
      <h2>Informacion disponible</h2>${list(item.informacion_disponible)}
      <h2>Problema planteado</h2><p>${esc(item.problema_planteado)}</p>
      <h2>Preguntas para el alumno</h2>${list(item.preguntas_para_el_alumno)}
      <h2>Objetivos de aprendizaje</h2>${list(item.objetivos_de_aprendizaje)}
      <h2>Errores habituales</h2>${list(item.errores_habituales)}
    `;
    meta.textContent = `${item.id} · ${item.dificultad} · ${item.referencia_al_bloque}`;
    counter.textContent = `${index + 1} / ${cases.length}`;
    prev.disabled = index === 0;
    next.textContent = index === cases.length - 1 ? "Finalizar" : "Siguiente";
  }

  fetch("casos.json").then(r => {
    if (!r.ok) throw new Error("No se pudo cargar casos.json");
    return r.json();
  }).then(data => {
    cases = data;
    render();
  }).catch(error => {
    title.textContent = "No se pudieron cargar los casos";
    context.textContent = error.message;
  });

  prev?.addEventListener("click", () => { index = Math.max(0, index - 1); render(); });
  next?.addEventListener("click", () => {
    if (index < cases.length - 1) { index += 1; render(); }
    else window.location.href = "../../inicio.html";
  });
})();
