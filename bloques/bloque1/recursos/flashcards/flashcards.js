(function () {
  const question = document.getElementById("cardQuestion");
  const answer = document.getElementById("cardAnswer");
  const detail = document.getElementById("cardDetail");
  const meta = document.getElementById("cardMeta");
  const counter = document.getElementById("cardCounter");
  const prev = document.getElementById("prevCard");
  const next = document.getElementById("nextCard");
  const toggle = document.getElementById("toggleCard");

  let cards = [];
  let index = 0;
  let revealed = false;

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
    const card = cards[index];
    if (!card) return;
    question.textContent = card.pregunta;
    answer.textContent = revealed ? card.respuesta : "";
    detail.innerHTML = revealed
      ? `<strong>Explicacion breve</strong><span>${escapeHtml(card.explicacion_breve)}</span><strong>Error habitual</strong><span>${escapeHtml(card.error_habitual)}</span><strong>Regla mnemotecnica</strong><span>${escapeHtml(card.regla_mnemotecnica)}</span>`
      : "<strong>Piensa la respuesta antes de mostrarla</strong><span>Usa la tarjeta para repasar el concepto sin convertirlo todavia en test.</span>";
    meta.textContent = `${card.id} · ${card.tema} · ${card.dificultad}`;
    counter.textContent = `${index + 1} / ${cards.length}`;
    prev.disabled = index === 0;
    next.textContent = index === cards.length - 1 ? "Finalizar" : "Siguiente";
    toggle.textContent = revealed ? "Ocultar respuesta" : "Mostrar respuesta";
  }

  fetch("flashcards.json")
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar flashcards.json");
      return response.json();
    })
    .then(data => {
      cards = data;
      render();
    })
    .catch(error => {
      question.textContent = "No se pudieron cargar las flashcards";
      answer.textContent = error.message;
    });

  prev?.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    revealed = false;
    render();
  });

  next?.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index += 1;
      revealed = false;
      render();
    } else {
      window.location.href = "../../inicio.html";
    }
  });

  toggle?.addEventListener("click", () => {
    revealed = !revealed;
    render();
  });
})();
