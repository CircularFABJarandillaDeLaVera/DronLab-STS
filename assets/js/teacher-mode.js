/* DronLab · modo docente compartido.
   Muestra los elementos [data-teacher] solo cuando body tiene .show-notes.
   Clave por curso/vista via <body data-teacher-key="..."> (por defecto 'dronlab_teacher').
   Entrada: Ctrl + Alt + D. Salida: boton #btnTeacherExit. */
(function () {
  var body = document.body;
  if (!body) return;
  var key = body.getAttribute('data-teacher-key') || 'dronlab_teacher';

  function set(on) {
    body.classList.toggle('show-notes', on);
    try {
      window.localStorage.setItem(key, on ? '1' : '0');
    } catch (error) {
      return;
    }
  }

  try {
    if (window.localStorage.getItem(key) === '1') body.classList.add('show-notes');
  } catch (error) {
    return;
  }

  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.altKey && e.code === 'KeyD' && !e.repeat) {
      e.preventDefault();
      set(!body.classList.contains('show-notes'));
    }
  });

  var exit = document.getElementById('btnTeacherExit');
  if (exit) exit.onclick = function () { set(false); };
})();
