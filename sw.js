const CACHE_NAME = 'app-formulario-dinamico-cache';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    '/',
                    'index.html',
                    'manifest.json',
                    'css/styles.css',
                    'img/ubi.png',
                    'js/script.js',
                    'https://code.jquery.com/jquery-3.5.1.slim.min.js',
                    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
                    // Agrega aquí otros recursos que quieras que se almacenen en la caché
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
