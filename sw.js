const CACHE_NAME = 'saving-app-v1';
const urlsToCache = [
  '/my-saving-app-/',
  '/my-saving-app-/index.html',
  '/my-saving-app-/manifest.json',
  '/my-saving-app-/launchericon-192x192.png',
  '/my-saving-app-/launchericon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
