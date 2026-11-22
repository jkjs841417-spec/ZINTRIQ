/* Dashboard starter interactions. Live metrics require connected platform APIs. */
(function () {
  const create = document.getElementById("createPostBtn");
  if (create) create.addEventListener("click", () => {
    if (window.ZINTRIQ && window.ZINTRIQ.showPage) window.ZINTRIQ.showPage("content");
  });
})();
