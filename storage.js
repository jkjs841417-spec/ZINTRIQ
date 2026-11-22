window.ZintriqStorage = {
  get(key, fallback){try{const value=localStorage.getItem("zintriq_"+key);return value?JSON.parse(value):fallback}catch(e){return fallback}},
  set(key,value){try{localStorage.setItem("zintriq_"+key,JSON.stringify(value));return true}catch(e){return false}},
  remove(key){localStorage.removeItem("zintriq_"+key)}
};
window.Zintriq = window.Zintriq || {};
window.Zintriq.toast = function(message){const region=document.getElementById("toastRegion");if(!region)return;const el=document.createElement("div");el.className="toast";el.textContent=message;region.appendChild(el);setTimeout(()=>el.remove(),2800)};
