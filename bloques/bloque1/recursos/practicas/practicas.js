(function () {
  const title = document.getElementById("practiceTitle");
  const goal = document.getElementById("practiceGoal");
  const body = document.getElementById("practiceBody");
  const meta = document.getElementById("practiceMeta");
  const counter = document.getElementById("practiceCounter");
  const prev = document.getElementById("prevPractice");
  const next = document.getElementById("nextPractice");
  let practices = [];
  let index = 0;
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  const list = items => `<ol>${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ol>`;
  const bullets = items => `<ul>${(items || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;

  function render() {
    const item = practices[index];
    if (!item) return;
    title.textContent = item.titulo;
    goal.textContent = item.objetivo;
    body.innerHTML = `
      <h2>Contexto</h2><p>${esc(item.contexto)}</p>
      <h2>Material necesario</h2>${bullets(item.material_necesario)}
      <h2>Instrucciones</h2>${list(item.instrucciones_paso_a_paso)}
      <h2>Criterios de exito</h2>${bullets(item.criterios_de_exito)}
      <h2>Errores habituales</h2>${bullets(item.errores_habituales)}
    `;
    meta.textContent = `${item.id} · ${item.dificultad} · ${item.tiempo_estimado}`;
    counter.textContent = `${index + 1} / ${practices.length}`;
    prev.disabled = index === 0;
    next.textContent = index === practices.length - 1 ? "Finalizar" : "Siguiente";
  }

  fetch("practicas.json").then(r => {
    if (!r.ok) throw new Error("No se pudo cargar practicas.json");
    return r.json();
  }).then(data => { practices = data; render(); }).catch(error => {
    title.textContent = "No se pudieron cargar las practicas";
    goal.textContent = error.message;
  });

  prev?.addEventListener("click", () => { index = Math.max(0, index - 1); render(); });
  next?.addEventListener("click", () => {
    if (index < practices.length - 1) { index += 1; render(); }
    else window.location.href = "../../inicio.html";
  });
})();
