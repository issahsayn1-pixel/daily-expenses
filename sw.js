self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This allows the app to work offline
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
