// AULTRON AI - Service Worker
const CACHE_NAME = 'aultron-v1';
const urlsToCache = [
  '/aultron/',
  '/aultron/index.html',
  '/aultron/logo.webp',
  '/aultron/css/global.css',
  '/aultron/css/landing.css',
  '/aultron/css/chat.css',
  '/aultron/js/config.js',
  '/aultron/js/landing.js',
  '/aultron/pages/login.html',
  '/aultron/pages/signup.html',
  '/aultron/pages/chat.html'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).catch(() => caches.match('/aultron/pages/chat.html'));
    })
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
