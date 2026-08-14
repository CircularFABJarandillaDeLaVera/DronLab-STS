(() => {
  const main = document.getElementById('main');
  let data;
  let current = [];
  let filter = 'todas';

  function normalize(json) {
    const cards = Array.isArray(json) ? json : json.flashcards || [];
    return {
      titulo: json.titulo || 'Flashcards Bloque 2 STS',
      bloque: json.bloque || 'Limitaciones del rendimiento humano · Syllabus STS paginas 4-5 · Estado VALIDADO',
      total: json.total || cards.length,
      flashcards: cards
    };
  }

  function byDifficulty(cards) {
    return cards.reduce((acc, card) => {
      acc[card.dificultad] = (acc[card.dificultad] || 0) + 1;
      return acc;
    }, {});
  }

  function cardHtml(card, index) {
    const mnemonic = card.regla_mnemotecnica ? `<p class="small"><b>Regla mnemotecnica</b>${card.regla_mnemotecnica}</p>` : '';
    return `
      <article class="flash" tabindex="0" aria-label="${card.id}">
        <div class="inner">
          <div class="face front">
            <div class="meta"><span class="tag">${card.id}</span><span class="tag">${card.dificultad}</span><span class="tag">${card.tipo}</span></div>
            <p class="small"><b>${card.tema}</b>${card.subtema}</p>
            <div class="question">${index + 1}. ${card.pregunta}</div>
          </div>
          <div class="face back">
            <div class="answer">${card.respuesta}</div>
            <p class="small"><b>Explicacion breve</b>${card.explicacion_breve}</p>
            <p class="small"><b>Error habitual</b>${card.error_habitual}</p>
            ${mnemonic}
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const visible = filter === 'todas' ? current : current.filter(card => card.dificultad === filter);
    const stats = byDifficulty(data.flashcards);
    main.innerHTML = `
      <section class="panel hero">
        <h1>${data.titulo}</h1>
        <p>${data.bloque}</p>
        <div class="stats"><span class="pill">${data.total} tarjetas</span><span class="pill">${stats.facil || 0} faciles</span><span class="pill">${stats.media || 0} medias</span><span class="pill">${stats.dificil || 0} dificiles</span></div>
      </section>
      <section class="flashgrid">${visible.length ? visible.map(cardHtml).join('') : '<p class="panel empty">No hay tarjetas para este filtro.</p>'}</section>
    `;
    document.querySelectorAll('.flash').forEach(card => {
      card.onclick = () => card.classList.toggle('flipped');
      card.onkeydown = event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          card.classList.toggle('flipped');
        }
      };
    });
    document.querySelectorAll('nav button[data-filter]').forEach(button => button.classList.toggle('active', button.dataset.filter === filter));
    fitCards();
  }

  function fitCards() {
    document.querySelectorAll('.flash').forEach(card => {
      const inner = card.querySelector('.inner');
      const faces = [...card.querySelectorAll('.face')];
      if (!inner || faces.length === 0) return;
      inner.style.minHeight = '';
      card.style.minHeight = '';
      const required = Math.max(270, ...faces.map(face => face.scrollHeight + 4));
      inner.style.minHeight = `${required}px`;
      card.style.minHeight = `${required}px`;
    });
  }

  document.querySelectorAll('nav button[data-filter]').forEach(button => {
    button.onclick = () => {
      filter = button.dataset.filter;
      render();
    };
  });
  document.getElementById('shuffle').onclick = () => {
    current = [...current].sort(() => Math.random() - 0.5);
    render();
  };
  document.getElementById('print').onclick = () => window.print();
  window.addEventListener('resize', fitCards);

  fetch('flashcards.json')
    .then(response => response.json())
    .then(json => {
      data = normalize(json);
      current = [...data.flashcards];
      render();
    })
    .catch(() => {
      main.innerHTML = '<section class="panel">No se pudieron cargar las flashcards. Abre esta vista desde Live Server.</section>';
    });
})();
