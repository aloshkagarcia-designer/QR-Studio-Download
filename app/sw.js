// Generado al compilar. Guarda la app en el teléfono para que funcione sin internet.
const CACHE = 'qrstudio-10c3921c9730'
const FILES = ["./","index.html","manifest.webmanifest","favicon.svg","apple-touch-icon.png","icon-192.png","icon-512.png","icon-maskable-512.png","assets/index-q4RTtWBk.js","assets/FileReadyDialog-D09eiYcc.js","assets/html2canvas-Bw0OShmD.js","assets/index.es-DxMJAeYv.js","assets/pdf-BjAo75uu.js","assets/pdf.worker.min-CA-BJPbF.js","assets/purify.es-Dzkdzyfv.js","assets/rolldown-runtime-XKyaHtl9.js","assets/web-D4l0IPUt.js","assets/web-Dj7gB1Wg.js","assets/Vera-CgnHjxvt.ttf","assets/VeraBd-Cy-HjirB.ttf","assets/index-DRtiy42S.css","assets/pdf.worker.min-Cpi8b8z3.mjs","assets/zxing_reader-CLNBINTx.wasm"]
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
