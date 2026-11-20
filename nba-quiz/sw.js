/* חידון ה-NBA הגדול – service worker: רשת קודם, ובלי רשת – הגרסה האחרונה ששמורה */
const C="nbaq-v1";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r.url.split("?")[0],cp))}return res}).catch(()=>caches.match(r.url.split("?")[0]).then(m=>m||caches.match("/nba-quiz/"))))});
