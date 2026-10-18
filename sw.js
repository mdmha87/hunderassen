// Offline-Cache. VERSION bei jeder Änderung an App-Dateien oder Bildern erhöhen.
const VERSION = "v2";
const CACHE = "hunderassen-" + VERSION;
const SHELL = [
  "./",
  "index.html",
  "css/style.css",
  "js/app.js",
  "data/rassen.js",
  "data/bilder.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

// Alle Rassenbilder gleich bei der Installation laden, damit die App sofort komplett offline läuft.
self.window = self;
importScripts("data/bilder.js");
const IMAGES = Object.entries(self.BILDER || {})
  .flatMap(([id, list]) => list.map(b => `img/rassen/${id}/${b.datei}`));

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll([...SHELL, ...IMAGES]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache zuerst; Bilder und alles Weitere werden beim ersten Laden mit aufgenommen.
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.match(event.request).then(hit => hit || fetch(event.request).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
      }
      return res;
    }))
  );
});
