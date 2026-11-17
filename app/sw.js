// Generado al compilar. Guarda la app en el teléfono para que funcione sin internet.
const CACHE = 'qrstudio-01d853641ba6'
const FILES = ["./","index.html","manifest.webmanifest","favicon.svg","apple-touch-icon.png","icon-192.png","icon-512.png","icon-maskable-512.png","assets/index-D40SHPvm.js","assets/html2canvas-CrTVRs8z.js","assets/index.es-BzZ9nq6z.js","assets/pdf-BjAo75uu.js","assets/pdf.worker.min-CA-BJPbF.js","assets/purify.es-Dzkdzyfv.js","assets/Vera-CgnHjxvt.ttf","assets/VeraBd-Cy-HjirB.ttf","assets/index-D_9fy-yi.css","assets/pdf.worker.min-Cpi8b8z3.mjs","assets/zxing_reader-CLNBINTx.wasm"]
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then((r) => r || fetch(req)))
    return
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req)))
})
