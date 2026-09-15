(function () {
  var storageKey = "edusdk-theme";
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var label = document.querySelector("[data-theme-label]");
  var icon = document.querySelector("[data-theme-icon]");
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function storedTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function initialTheme() {
    var stored = storedTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return media && media.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    }
    if (label) {
      label.textContent = isDark ? "Modo light" : "Modo dark";
    }
    if (icon) {
      icon.innerHTML = isDark ? "&#9728;" : "&#9790;";
    }
  }

  applyTheme(initialTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  }
}());
