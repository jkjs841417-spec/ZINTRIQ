/* Inbox UI is prepared. Connect your backend's message-list and reply endpoints here.
   Do not call social networks directly from the browser with private credentials. */
window.ZintriqInbox={async load(){if(!ZintriqAPI.configured())return;try{return await ZintriqAPI.request("/api/inbox")}catch(e){console.warn("Inbox API:",e.message)}}};
