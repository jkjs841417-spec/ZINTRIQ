/* ZINTRIQ theme switcher */
(function () {
  const key = "zintriq-theme";
  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");
    if (toggle) {
      toggle.innerHTML = theme === "dark"
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';
      if (window.lucide) lucide.createIcons();
    }
    document.documentElement.style.colorScheme = theme;
  }
  let saved = "light";
  try { saved = localStorage.getItem(key) || "light"; } catch (_) {}
  applyTheme(saved);
  if (toggle) toggle.addEventListener("click", function () {
    const next = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(key, next); } catch (_) {}
  });
})();
