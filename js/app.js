var url            = window.location.href;
var swLocation     = '/verde-creacion-app/sw.js';

// Verificar si podemos usar Service Workers
if (navigator.serviceWorker) {

        if ( url.includes('localhost') )
        {
                swLocation  = '/sw.js';
                console.log('Trabajando en el localhost!');
        }

        // registramos el SW
        navigator.serviceWorker.register( swLocation )
            .then ( registro => {
                    console.log('SW Ok!');
            });
};


