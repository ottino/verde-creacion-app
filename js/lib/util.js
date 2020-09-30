let mensajeDiv = ( tipo , div , mensaje ) => {

    let divMensajes = document.querySelector(`#${ div }`);

    divMensajes.classList.remove('hidden');

    divMensajes.innerHTML =
    `<div class="row">
    <div class="col-md-12">
        <div class="alert alert-${ tipo }" role="alert">
            ${ mensaje }
        </div>
    </div>
    </div>
    `;

}

let mostrarDiv = ( divMostrar ) => {

    let divs = ['divListPedidos','divFormCargaPedido',
                'divFormCargaCliente'];

    divs.map( item => {

        if (item != divMostrar)
            document.querySelector(`#${ item }`).classList.add('hidden');
        else
            document.querySelector(`#${ divMostrar }`).classList.remove('hidden');

    });

}

let ocultarDivs = () => {

    let divs = ['divListPedidos','divFormCargaPedido',
                'divFormCargaCliente'];

    divs.map( item => {

            document.querySelector(`#${ item }`).classList.add('hidden');

    });

}

let FormDatosCliente = () => {

    let nombre       = document.getElementById("fac_nombre_cli").value,
        apellido     = document.getElementById("fac_apellido").value,
        direccion    = document.getElementById("fac_direccion").value,
        ciudad       = document.getElementById("fac_ciudad").value,
        cod_postal   = document.getElementById("fac_cp").value,
        email        = document.getElementById("fac_email").value,
        celular      = document.getElementById("fac_celular").value;

    return new URLSearchParams({
        nombre,
        apellido,
        direccion,
        ciudad,
        cod_postal,
        email,
        celular
    });

}

let limpiarFormAltaCliente = () => {

    let divMensajes = document.querySelector('#divMensajeAltaCliente');
    divMensajes.classList.add('hidden');

    document.getElementById("fac_nombre_cli").value = "";
    document.getElementById("fac_apellido").value = "";
    document.getElementById("fac_direccion").value = "";
    document.getElementById("fac_ciudad").value = "";
    document.getElementById("fac_cp").value = "";
    document.getElementById("fac_email").value = "";
    document.getElementById("fac_celular").value = "";



}