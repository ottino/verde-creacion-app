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

let FormDatosPedido = ( id = false ) => {

    let celular     = document.getElementById("fap_celular").value,
    nickname        = document.getElementById("fap_nick").value,
    productos       = document.getElementById("fap_productos").value,
    fecha_pactada   = document.getElementById("fap_fechaPactada").value,
    costo_envio     = document.getElementById("fap_precioEnvio").value,
    envioObs        = document.getElementById("fap_envioObs").value,
    cantidad        = document.getElementById("fap_cantidad").value,
    precio_u        = document.getElementById("fap_precioUnit").value,
    estado          = document.getElementById("fap_estado").value,
    monto_total     = document.getElementById("fap_importeTot").value;


    if ( id == false )
    {
        return new URLSearchParams({
            celular,
            nickname,
            productos,
            fecha_pactada,
            costo_envio,
            envioObs,
            cantidad,
            precio_u,
            estado,
            monto_total
        });

    } else {

        return new URLSearchParams({
            id,
            celular,
            nickname,
            productos,
            fecha_pactada,
            costo_envio,
            envioObs,
            cantidad,
            precio_u,
            estado,
            monto_total
        });

    }

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

let limpiarFormAltaPedido = () => {

    let divMensajes = document.querySelector('#divMensajeAltaPedido');
    divMensajes.classList.add('hidden');

    document.getElementById("fmp_idPedido").value = "";
    document.getElementById("fap_celular").value = "";
    document.getElementById("fap_nick").value = "";
    document.getElementById("fap_productos").value = "";
    document.getElementById("fap_fechaPactada").value = "";
    document.getElementById("fap_precioEnvio").value = "";
    document.getElementById("fap_envioObs").value = "";
    document.getElementById("fap_cantidad").value = "";
    document.getElementById("fap_precioUnit").value = "";
    document.getElementById("fap_importeTot").value = "";


}