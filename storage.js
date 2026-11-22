/* Safe local storage wrapper for non-sensitive frontend preferences and drafts. */
window.ZINTRIQStorage = {
  get(key, fallback = null) {
    try {
      const value = localStorage.getItem("zintriq-" + key);
      return value === null ? fallback : JSON.parse(value);
    } catch (_) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem("zintriq-" + key, JSON.stringify(value)); return true; }
    catch (_) { return false; }
  },
  remove(key) {
    try { localStorage.removeItem("zintriq-" + key); return true; }
    catch (_) { return false; }
  }
};
