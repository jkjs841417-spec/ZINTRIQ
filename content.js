/* Content studio local draft helpers */
window.ZINTRIQContent = {
  saveDraft(draft) {
    const drafts = JSON.parse(localStorage.getItem("zintriq-drafts") || "[]");
    drafts.push({ ...draft, savedAt: new Date().toISOString() });
    localStorage.setItem("zintriq-drafts", JSON.stringify(drafts));
    return drafts.length;
  },
  getDrafts() {
    try { return JSON.parse(localStorage.getItem("zintriq-drafts") || "[]"); }
    catch (_) { return []; }
  }
};
