(() => {
  const main = document.getElementById('main');
  let data;
  let filter = 'todas';
  const selected = {};

  function normalize(json) {
    const preguntas = Array.isArray(json) ? json : json.preguntas || [];
    return {
      titulo: json.titulo || 'Test Bloque 2 STS',
      bloque: json.bloque || 'Limitaciones del rendimiento humano · Syllabus STS paginas 4-5 · Estado VALIDADO',
      total: json.total || preguntas.length,
      preguntas
    };
  }

  function stats() {
    return data.preguntas.reduce((acc, question) => {
      acc[question.dificultad] = (acc[question.dificultad] || 0) + 1;
      return acc;
    }, {});
  }

  function visibleQuestions() {
    return filter === 'todas' ? data.preguntas : data.preguntas.filter(question => question.dificultad === filter);
  }

  function render() {
    const count = stats();
    const visible = visibleQuestions();
    main.innerHTML = `
      <section class="panel hero">
        <h1>${data.titulo}</h1>
        <p>${data.bloque}</p>
        <div class="stats"><span class="pill">${data.total} preguntas</span><span class="pill">${count.facil || 0} faciles</span><span class="pill">${count.media || 0} medias</span><span class="pill">${count.dificil || 0} dificiles</span></div>
      </section>
      <section id="resultado" class="panel result">Selecciona respuestas y pulsa Corregir.</section>
      ${visible.map((question, index) => `
        <section class="panel question" data-id="${question.id}">
          <div class="meta"><span class="tag">${question.id}</span><span class="tag">${question.dificultad}</span><span class="tag">${question.tema}</span></div>
          <h2>${index + 1}. ${question.pregunta}</h2>
          <div class="opts">${question.respuestas.map((answer, answerIndex) => `<button class="opt" data-id="${question.id}" data-answer="${answerIndex}">${answer}</button>`).join('')}</div>
          <div class="feedback"><p><b>Explicacion:</b> ${question.explicacion}</p><p><b>Error habitual:</b> ${question.error_habitual}</p><p><b>Referencia:</b> ${question.referencia_concepto || 'Syllabus STS paginas 4-5 · Estado VALIDADO'}</p></div>
        </section>
      `).join('')}
    `;
    document.querySelectorAll('.opt').forEach(option => {
      const id = option.dataset.id;
      if (selected[id] === +option.dataset.answer) option.classList.add('selected');
      option.onclick = () => {
        document.querySelectorAll(`.opt[data-id="${id}"]`).forEach(item => item.classList.remove('selected'));
        option.classList.add('selected');
        selected[id] = +option.dataset.answer;
      };
    });
    document.querySelectorAll('nav button[data-filter]').forEach(button => button.classList.toggle('active', button.dataset.filter === filter));
  }

  function correct() {
    let score = 0;
    const visible = visibleQuestions();
    visible.forEach(question => {
      const section = document.querySelector(`.question[data-id="${question.id}"]`);
      section.querySelector('.feedback').classList.add('show');
      section.querySelectorAll('.opt').forEach(option => {
        const value = +option.dataset.answer;
        option.classList.remove('correct', 'wrong');
        if (value === question.respuesta_correcta) option.classList.add('correct');
        else if (selected[question.id] === value) option.classList.add('wrong');
      });
      if (selected[question.id] === question.respuesta_correcta) score++;
    });
    document.getElementById('resultado').textContent = `Resultado: ${score} / ${visible.length}`;
  }

  document.querySelectorAll('nav button[data-filter]').forEach(button => {
    button.onclick = () => {
      filter = button.dataset.filter;
      render();
    };
  });
  document.getElementById('corregir').onclick = correct;
  document.getElementById('reiniciar').onclick = () => {
    Object.keys(selected).forEach(key => delete selected[key]);
    render();
  };
  document.getElementById('print').onclick = () => window.print();

  fetch('test.json')
    .then(response => response.json())
    .then(json => {
      data = normalize(json);
      render();
    })
    .catch(() => {
      main.innerHTML = '<section class="panel">No se pudo cargar el test. Abre esta vista desde Live Server.</section>';
    });
})();
