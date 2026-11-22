/* Calendar data helpers; scheduling execution requires a backend service. */
window.ZINTRIQCalendar = {
  saveSchedule(item) {
    const items = JSON.parse(localStorage.getItem("zintriq-schedule") || "[]");
    items.push(item);
    localStorage.setItem("zintriq-schedule", JSON.stringify(items));
    return items;
  },
  getSchedule() {
    try { return JSON.parse(localStorage.getItem("zintriq-schedule") || "[]"); }
    catch (_) { return []; }
  }
};
