/* Configure this with your deployed backend URL after checking its API routes.
   Example: window.ZINTRIQ_API_BASE = "https://your-backend.example.com";
   Never put private keys or OAuth client secrets in frontend code. */
window.ZINTRIQ_API_BASE = window.ZINTRIQ_API_BASE || "";
window.ZintriqAPI = {
  base(){return (window.ZINTRIQ_API_BASE||"").replace(/\/+$/,"")},
  configured(){return Boolean(this.base())},
  async request(path,options={}){
    if(!this.configured()) throw new Error("Backend URL is not configured.");
    const response=await fetch(this.base()+path,{...options,headers:{"Content-Type":"application/json",...(options.headers||{})}});
    if(!response.ok) throw new Error("API request failed ("+response.status+").");
    const type=response.headers.get("content-type")||"";
    return type.includes("application/json")?response.json():response.text();
  },
  async health(){return this.request("/health")}
};
