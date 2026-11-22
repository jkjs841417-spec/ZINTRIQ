/* Workspace settings helpers */
window.ZINTRIQSettings = {
  get(key, fallback = "") {
    try { return localStorage.getItem("zintriq-setting-" + key) ?? fallback; }
    catch (_) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("zintriq-setting-" + key, String(value)); return true; }
    catch (_) { return false; }
  }
};
