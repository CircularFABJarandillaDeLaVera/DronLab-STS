(function () {
  const question = document.getElementById("testQuestion");
  const answers = document.getElementById("testAnswers");
  const feedback = document.getElementById("testFeedback");
  const meta = document.getElementById("testMeta");
  const counter = document.getElementById("testCounter");
  const prev = document.getElementById("prevQuestion");
  const next = document.getElementById("nextQuestion");

  let items = [];
  let index = 0;
  let selected = null;
  const userAnswers = [];

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function render() {
    const item = items[index];
    if (!item) return;
    selected = userAnswers[index] ?? null;
    question.textContent = item.pregunta;
    answers.innerHTML = item.respuestas.map((answer, answerIndex) => {
      const classes = ["answer"];
      if (selected === answerIndex) classes.push("selected");
      if (selected !== null && answerIndex === item.respuesta_correcta) classes.push("correct");
      if (selected === answerIndex && selected !== item.respuesta_correcta) classes.push("wrong");
      return `<button type="button" class="${classes.join(" ")}" data-answer="${answerIndex}">${escapeHtml(answer)}</button>`;
    }).join("");
    feedback.innerHTML = selected === null
      ? "<strong>Selecciona una respuesta</strong><span>El feedback aparecera al responder.</span>"
      : `<strong>${selected === item.respuesta_correcta ? "Correcto" : "Revisar"}</strong><span>${escapeHtml(item.explicacion)}</span><strong>Error habitual</strong><span>${escapeHtml(item.error_habitual)}</span>`;
    meta.textContent = `${item.id} · ${item.tema} · ${item.dificultad}`;
    counter.textContent = `${index + 1} / ${items.length}`;
    prev.disabled = index === 0;
    next.textContent = index === items.length - 1 ? "Ver resultado" : "Siguiente";

    answers.querySelectorAll(".answer").forEach(button => {
      button.addEventListener("click", () => {
        userAnswers[index] = Number(button.dataset.answer);
        render();
      });
    });
  }

  function renderResult() {
    const correct = items.reduce((total, item, itemIndex) => (
      total + (userAnswers[itemIndex] === item.respuesta_correcta ? 1 : 0)
    ), 0);
    question.textContent = "Resultado del test";
    answers.innerHTML = "";
    feedback.innerHTML = `<strong>${correct} / ${items.length} correctas</strong><span>Repasa las preguntas falladas antes de continuar con fases posteriores.</span>`;
    meta.textContent = "Bloque 1 · Test de bloque";
    counter.textContent = "Finalizado";
    prev.disabled = false;
    next.textContent = "Volver al bloque";
  }

  fetch("test.json")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar test.json");
      return response.json();
    })
    .then(data => {
      items = data;
      render();
    })
    .catch(error => {
      question.textContent = "No se pudo cargar el test";
      feedback.textContent = error.message;
    });

  prev?.addEventListener("click", () => {
    if (index >= items.length) {
      index = items.length - 1;
    } else {
      index = Math.max(0, index - 1);
    }
    render();
  });

  next?.addEventListener("click", () => {
    if (index >= items.length) {
      window.location.href = "../../inicio.html";
      return;
    }
    if (index < items.length - 1) {
      index += 1;
      render();
    } else {
      index = items.length;
      renderResult();
    }
  });
})();
