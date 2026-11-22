/* ZINTRIQ page navigation and mobile sidebar */
(function () {
  const pages = Array.from(document.querySelectorAll(".page"));
  const links = Array.from(document.querySelectorAll(".nav-link[data-page]"));
  const title = document.getElementById("pageTitle");
  const sidebar = document.getElementById("sidebar");
  const titles = {
    dashboard: "Overview", accounts: "Social Accounts", content: "Content Studio",
    calendar: "Content Calendar", "ai-assistant": "AI Assistant",
    inbox: "Unified Inbox", analytics: "Analytics", settings: "Settings"
  };
  function showPage(id) {
    if (!titles[id]) id = "dashboard";
    pages.forEach(p => p.classList.toggle("active", p.id === id));
    links.forEach(a => a.classList.toggle("active", a.dataset.page === id));
    if (title) title.textContent = titles[id];
    if (sidebar) sidebar.classList.remove("open");
    if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  }
  links.forEach(a => a.addEventListener("click", e => {
    e.preventDefault(); showPage(a.dataset.page);
  }));
  document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.go)));
  const menu = document.getElementById("menuToggle");
  if (menu && sidebar) menu.addEventListener("click", () => sidebar.classList.toggle("open"));
  showPage(location.hash.slice(1) || "dashboard");
  window.ZINTRIQ = window.ZINTRIQ || {};
  window.ZINTRIQ.showPage = showPage;
})();
