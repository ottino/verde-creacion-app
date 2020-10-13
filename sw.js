// const CACHE_STATIC_NAME     = 'static-v1';
const CACHE_INMUTABLE_NAME  = 'inmutable-v1';


// INSTALACION SW
self.addEventListener('install', e => {

    console.log('Instalando SW');

    // CACHES

    // dinamico
    const cacheStatic = caches.open( CACHE_STATIC_NAME )
        .then( cache => {

            console.log('Paginas cargadas en el APP SHELL: Ok');

            // Cargar en cache
            // return cache.addAll([
            //     // '/',
            //     // '/index.html',
            //     '/css/style.css'
            //     // '/js/app.js',
            //     ]);


        }).then( () => {

            // Eliminar en el cache las imagenes viejas
            // console.log('Paginas eliminadas en el cache: Ok');

        });

    const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
        .then( cache => {

            console.log('Paginas cargadas en el cache statico: Ok');

            // Cargar en cache
            return cache.addAll([
                 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
                 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
                 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
            ]);


        }).then( () => {

            // Eliminar en el cache las imagenes viejas
            // console.log('Paginas eliminadas en el cache: Ok');

        });

    e.waitUntil( Promise.all( [cacheStatic , cacheInmutable] ) );

});


// ACTIVACION SW: toma el control de la aplicacion
self.addEventListener('activate', event => {

    console.log('SW Activo y listo para controlar la aplicacion! ');

    // Eliminar cache viejo


});


// ACTIVACION SW: toma el control de la aplicacion
self.addEventListener('activate', event => {

    console.log('SW Activo y listo para controlar la aplicacion! ');

    // Eliminar cache viejo


});

// FETCH: Manejo de peticiones http
// self.addEventListener('fetch', e => {

//     console.log('Respuestas: ', e.request);
//     const respuesta = caches.match( e.request )
//         .then( res => {
//             console.log('Respuestas: ', res.url);

//             if ( res ) return res; // Responde el cache

//                 return fetch( e.request )
//                     .then( newResp => {
//                         return newResp;
//                 });

//         });


//     e.respondWith( respuesta );

// });

