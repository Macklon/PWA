// CACHING
const CACHE_NAME = "ver1";
const FILES_TO_CACHE = [
	   '/index.html',
		'/offline.html',
		'/script.js',
    'bootstrap/css/bootstrap.min.css',
    'bootstrap/js/bootstrap.min.js',
    'bootstrap/js/jquery.js',
	];

// INSTALL EVENT
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// FETCH EVENT
self.addEventListener('fetch', (event) => {
  if(!navigator.onLine && event.request.url.indexOf('index.html') !== -1) {
    event.respondWith(showOfflineLanding(event));
  }
  else {
    event.respondWith(pullFromCache(event));
  }

});

function showOfflineLanding(event) {
  return caches.match(new Request('offline.html'));
}

function pullFromCache(event) {
  return caches.match(event.request).then((response) => {
    return response || fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
  });
}

// ACTIVATE EVENT
self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
});