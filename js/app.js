
var url            = window.location.href;
var swLocation     = '/verde-creacion-app/sw.js';
let urlApi = `https://verde-creacion-server.herokuapp.com`;

// Verificar si podemos usar Service Workers
if (navigator.serviceWorker) {

        if ( url.includes('localhost') )
        {
                urlApi = `http://localhost:3000`;
                swLocation  = '/sw.js';
                console.log('Trabajando en el localhost!');
        } else  {

          console.log('Trabajando en git!');

        }

        // registramos el SW
        navigator.serviceWorker.register( swLocation )
            .then ( registro => {
                    console.log('SW Ok!');
            });
};

document.querySelector('#navbar').innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">VC-App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
          <a id="btnListarPedidos_pend" class="nav-link" href="#">Pendientes</a>
          </li>
          <li class="nav-item">
          <a id="btnListarPedidos_ent" class="nav-link" href="#">Entregados</a>
          </li>
          <li class="nav-item">
          <a id="btnListarPedidos_todos" class="nav-link" href="#">Todos</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Carga de datos
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a id="btnCargarCliente" class="dropdown-item" href="#">Cliente</a>
                  <div class="dropdown-divider"></div>
                  <a id="btnCargarPedido" class="dropdown-item" href="#">Pedido</a>
          </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        </nav>
`;

document.querySelector('#footer').innerHTML = `
<footer id="footer" class="footer bg-dark text-center">

        <div class="container">
        <p>&copy;2020 Ottino Maxmiliano M. </p>
        </div>

</footer>
`;

document.querySelector('#divFormCargaCliente').innerHTML = `

<div class="container" id="divMensajeAltaCliente" class="hidden"></div>

<form class="form-group">

  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Nombre</label>
      <input id="fac_nombre_cli" type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Apellido</label>
      <input id="fac_apellido" type="text" class="form-control" placeholder="Apellido">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label for="inputAddress">Direccion</label>
    <input id="fac_direccion" type="text" class="form-control" placeholder="Direccion">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Ciudad</label>
      <input id="fac_ciudad" type="text" class="form-control">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Codigo Postal</label>
      <input id="fac_cp" type="text" class="form-control" value="3100">
    </div>
  </div>
 
  <hr>

  <div class="row">
    <div class="col">
        <label for="inputEmail4">Email</label>
        <input id="fac_email" type="email" class="form-control" placeholder="Email">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Celular (*clave)</label>
      <input id="fac_celular" type="text" class="form-control" placeholder="Celular/Telefono">
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col">
      <button id="btnGuardarCli" type="text" class="btn btn-primary">Guardar</button>
    </div>
  </div>

</form>
`;

document.querySelector('#divFormCargaPedido').innerHTML = `

<div class="container" id="divMensajeAltaPedido" class="hidden"></div>

<div class="container" id="divIdPedido">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="">Codigo del pedido</span>
    </div>
    <input type="text" class="form-control" id="fmp_idPedido" disabled>
  </div>

  <hr>

</div>

<form>

  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Celular (*clave)</label>
      <input id="fap_celular" type="text" class="form-control" placeholder="Cel">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">nickname</label>
      <input id="fap_nick" type="text" class="form-control" placeholder="nick">
    </div>
  </div>

  <hr>


  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Producto/s</label>
      <input id="fap_productos" type="text" class="form-control" placeholder="Detalle">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Fecha Pactada</label>
      <input id="fap_fechaPactada" type="text" class="form-control" placeholder="Fecha (AAAAMMDD)">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Estado</label>
      <input id="fap_estado" type="text" class="form-control" value="PENDIENTE">
    </div>
  </div>

  <hr>

  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">Costo envio  &nbsp;&nbsp;&nbsp;</span>
    <span class="input-group-text">$</span>
  </div>
  <input id="fap_precioEnvio" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <input id="fap_envioObs" type="text" class="form-control" placeholder="Observaciones">
  </div>

  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">Precio unitario</span>
    <span class="input-group-text">$</span>
  </div>
  <input id="fap_precioUnit" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <input id="fap_cantidad" type="text" class="form-control" placeholder="cantidad">
  </div>

 <div class="input-group mb-3">
 <div class="input-group-prepend">
   <span class="input-group-text">Importe Total&nbsp;&nbsp;</span>
   <span class="input-group-text">$</span>
 </div>
 <input id="fap_importeTot" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
 </div>

</div>

  <hr>

  <text class="btn btn-primary" id="btnGuardarPedido">Grabar</button>

</form>
`;

// Oculto todos los divs cuando recargo la web
ocultarDivs();
//mostrarDiv('divListPedidos');

let btnCargarCliente    = document.querySelector('#btnCargarCliente');
let btnListarPedidosPend   = document.querySelector('#btnListarPedidos_pend');
let btnListarPedidosEnt    = document.querySelector('#btnListarPedidos_ent');
let btnListarPedidosTodos  = document.querySelector('#btnListarPedidos_todos');
let btnCargarPedido     = document.querySelector('#btnCargarPedido');
let btnGuardarCli       = document.querySelector('#btnGuardarCli');
let btnGuardarPedido    = document.querySelector('#btnGuardarPedido');
let divFormCargaCliente = document.querySelector('#divFormCargaCliente');
let divFormCargaPedido  = document.querySelector('#divFormCargaPedido');
let divListPedidos      = document.querySelector('#divListPedidos');


btnCargarCliente.addEventListener('click', ()=>{

        mostrarDiv( 'divFormCargaCliente' );
        limpiarFormAltaCliente();
});

btnCargarPedido.addEventListener('click', ()=>{

        mostrarDiv( 'divFormCargaPedido' );
        limpiarFormAltaPedido();
});

btnGuardarPedido.addEventListener('click', async ()=>{

  // unicamente para las modificaciones - sino queda en ""
  let idPedido = document.querySelector('#fmp_idPedido').value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type",
                   "application/x-www-form-urlencoded");

  if ( idPedido == "")
  {

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: FormDatosPedido(),
      redirect: 'follow'
    };

  } else {

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: FormDatosPedido( idPedido ),
      redirect: 'follow'
    };

  }


  fetch(urlApi + '/pedido' , requestOptions)
    .then(response => response.text())
    .then(result => {

      let { ok } = JSON.parse(result);

      if ( ok === false)
      {
        mensajeDiv( 'danger' ,  'divMensajeAltaPedido' , 'Error en el alta - revisa que el cel este como cliente' );
      } else {
        limpiarFormAltaPedido();
        mensajeDiv( 'info' ,  'divMensajeAltaPedido' , 'Procesado con exito' );
      }
    })
    .catch(error => console.log(error) );

});

btnGuardarCli.addEventListener('click', async ()=>{

        var myHeaders = new Headers();
        myHeaders.append("Content-Type",
                         "application/x-www-form-urlencoded");

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: FormDatosCliente(),
          redirect: 'follow'
        };

        fetch(urlApi + '/cliente' , requestOptions)
          .then(response => response.text())
          .then(result => {

            let { ok } = JSON.parse(result);

            if ( ok === false)
            {
              mensajeDiv( 'danger' ,  'divMensajeAltaCliente' , 'Error en el alta - verificar que tenga el dato del cel y que no exista ya en la base' );
            } else {
              limpiarFormAltaCliente();
              mensajeDiv( 'info' ,  'divMensajeAltaCliente' , 'Procesado con exito' );
            }



          })
          .catch(error => console.log(error) );
});

btnListarPedidosPend.addEventListener('click', ()=>{

      divFormCargaCliente.classList.add('hidden');
      divFormCargaPedido.classList.add('hidden');
      divListPedidos.classList.remove('hidden');

      //  fetch( urlApi + '/pedido', {method: 'GET'})
      fetch( urlApi + '/pedido?_estado=' + 'PENDIENTE', { method: 'GET' } )
        .then( resp => resp.json() )
        .then( resp => {

              let htmlListados = document.querySelector('#divListPedidos');

              let html = `
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Celu</th>
                    <th scope="col">Nick</th>
                    <th scope="col">Productos</th>
                    <th scope="col">$ Envio</th>
                    <th scope="col">$ Total</th>
                    <th scope="col">Entrega</th>
                    <th scope="col">Estado</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
              `;

              let data  = resp.pedidoDB;
              data.map((pedido)=>{

                const { _id , celular , nickname , monto_total , fecha_pactada , cantidad  , costo_envio , estado } = pedido;

                html = html + `
                                <tr>
                                  <td> ${ _id.slice( _id.length -5 ,_id.length) } </td>
                                  <td> ${ celular     } </td>
                                  <td> ${ nickname    } </td>
                                  <td> ${ cantidad    } </td>
                                  <td> ${ costo_envio } </td>
                                  <td> ${ monto_total } </td>
                                  <td> ${ fecha_pactada } </td>
                                  <td style="color: #28a745;"> ${ estado } </td>
                                  <td>
                                  <button type="button" class="btn btn-outline-warning" 
                                          onclick=" modificarPedido( '${ _id }' ) ">Editar</button>
                                  </td>
                                </tr>
                              `;
                });
              html = html + `</tbody></table>`;

              htmlListados.innerHTML= html ;
          });

});

btnListarPedidosEnt.addEventListener('click', ()=>{

  divFormCargaCliente.classList.add('hidden');
  divFormCargaPedido.classList.add('hidden');
  divListPedidos.classList.remove('hidden');

  //  fetch( urlApi + '/pedido', {method: 'GET'})
  fetch( urlApi + '/pedido?_estado=' + 'ENTREGADO', { method: 'GET' } )
    .then( resp => resp.json() )
    .then( resp => {

          let htmlListados = document.querySelector('#divListPedidos');

          let html = `
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Celu</th>
                <th scope="col">Nick</th>
                <th scope="col">Productos</th>
                <th scope="col">$ Envio</th>
                <th scope="col">$ Total</th>
                <th scope="col">Entrega</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
          `;

          let data  = resp.pedidoDB;
          data.map((pedido)=>{

            const { _id , celular , nickname , monto_total , fecha_pactada , cantidad  , costo_envio , estado } = pedido;

            html = html + `
                            <tr>
                              <td> ${ _id.slice( _id.length -5 ,_id.length) } </td>
                              <td> ${ celular     } </td>
                              <td> ${ nickname    } </td>
                              <td> ${ cantidad    } </td>
                              <td> ${ costo_envio } </td>
                              <td> ${ monto_total } </td>
                              <td> ${ fecha_pactada } </td>
                              <td style="color: #28a745;"> ${ estado } </td>
                              <td>
                              <button type="button" class="btn btn-outline-warning" 
                                      onclick=" modificarPedido( '${ _id }' ) ">Editar</button>
                              </td>
                            </tr>
                          `;
            });
          html = html + `</tbody></table>`;

          htmlListados.innerHTML= html ;
      });

});

btnListarPedidosTodos.addEventListener('click', ()=>{

  divFormCargaCliente.classList.add('hidden');
  divFormCargaPedido.classList.add('hidden');
  divListPedidos.classList.remove('hidden');

   fetch( urlApi + '/pedido', {method: 'GET'})
  // fetch( urlApi + '/pedido?_estado=' + 'ENTREGADO', { method: 'GET' } )
    .then( resp => resp.json() )
    .then( resp => {

          let htmlListados = document.querySelector('#divListPedidos');

          let html = `
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Celu</th>
                <th scope="col">Nick</th>
                <th scope="col">Productos</th>
                <th scope="col">$ Envio</th>
                <th scope="col">$ Total</th>
                <th scope="col">Entrega</th>
                <th scope="col">Estado</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
          `;

          let data  = resp.pedidoDB;
          data.map((pedido)=>{

            const { _id , celular , nickname , monto_total , fecha_pactada , cantidad  , costo_envio , estado } = pedido;

            html = html + `
                            <tr>
                              <td> ${ _id.slice( _id.length -5 ,_id.length) } </td>
                              <td> ${ celular     } </td>
                              <td> ${ nickname    } </td>
                              <td> ${ cantidad    } </td>
                              <td> ${ costo_envio } </td>
                              <td> ${ monto_total } </td>
                              <td> ${ fecha_pactada } </td>
                              <td style="color: #28a745;"> ${ estado } </td>
                              <td>
                              <button type="button" class="btn btn-outline-warning" 
                                      onclick=" modificarPedido( '${ _id }' ) ">Editar</button>
                              </td>
                            </tr>
                          `;
            });
          html = html + `</tbody></table>`;

          htmlListados.innerHTML= html ;
      });

});

function modificarPedido( idPedido ) {

  mostrarDiv( 'divFormCargaPedido' );
  document.querySelector('#divMensajeAltaPedido').classList.add('hidden');

  fetch( urlApi + '/pedido?_id=' + idPedido, { method: 'GET' } )
  .then( resp => resp.json() )
  .then( resp => {

        let data  = resp.pedidoDB;
        data.map((pedido)=>{

          const { _id , celular , nickname , monto_total ,
                  fecha_pactada , cantidad  , costo_envio ,
                  estado , productos , precio_u , obs_envio
                } = pedido;

          // _id del pedido
          document.getElementById("fmp_idPedido").value     = _id;

          document.getElementById("fap_celular").value      = celular;
          document.getElementById("fap_nick").value         = nickname;
          document.getElementById("fap_productos").value    = productos;
          document.getElementById("fap_fechaPactada").value = fecha_pactada;
          document.getElementById("fap_precioEnvio").value  = costo_envio;
          document.getElementById("fap_envioObs").value     = obs_envio;
          document.getElementById("fap_cantidad").value     = cantidad;
          document.getElementById("fap_precioUnit").value   = precio_u;
          document.getElementById("fap_importeTot").value   = monto_total;
          document.getElementById("fap_estado").value       = estado;

        });

    });

}
