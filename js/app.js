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

document.querySelector('#navbar').innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">VC-App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a id="btnListarPedidos" class="nav-link" href="#">Pedidos <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Carga de datos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a id="btnCargarCliente" class="dropdown-item" href="#">Alta Cliente</a>
                <a id="btnCargarCliente" class="dropdown-item" href="#">Modificar Cliente</a>
                <div class="dropdown-divider"></div>
                <a id="btnCargarPedido" class="dropdown-item" href="#">Alta Pedido</a>
                <a class="dropdown-item" href="#">Modificar Pedido</a>
        </div>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
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
<form>

  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Apellido</label>
      <input type="text" class="form-control" placeholder="Apellido">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label for="inputAddress">Direccion</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Direccion">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Ciudad</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Departamento</label>
      <select id="inputState" class="form-control">
        <option selected>Seleccionar...</option>
        <option>Oro Verde</option>
        <option>Valle Maria</option>
        <option>San Benito</option>
        <option>Aldea Brasilera</option>
        <option>Aldea Protestante</option>
        <option>Otro</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Codigo Postal</label>
      <input type="text" class="form-control" id="inputZip" value="3100">
    </div>
  </div>
 
  <hr>

  <div class="row">
    <div class="col">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Celular (*clave)</label>
      <input type="text" class="form-control" placeholder="Celular/Telefono">
    </div>
  </div>

  <hr>

  <button class="btn btn-primary">Sign in</button>

</form>
`;

document.querySelector('#divFormCargaPedido').innerHTML = `
<form>
  <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="nickname (facebook - instagram)">
      </div>
  </div>

  <hr>


  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Producto/s</label>
      <input type="text" class="form-control" placeholder="Detalle">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Fecha Pactada</label>
      <input type="text" class="form-control" placeholder="Fecha (AAAAMMDD)">
    </div>
  </div>

  <hr>

  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
    <label class="custom-control-label" for="customRadioInline1">Con envio</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
    <label class="custom-control-label" for="customRadioInline2">Sin envio</label>
  </div>

  <hr>

  <div class="row">
    <div class="col">
      <label for="formGroupExampleInput">Cantidad</label>
      <input type="text" class="form-control" placeholder="Cantidad">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Precio</label>
      <input type="text" class="form-control" placeholder="$ unitario">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Costo</label>
      <input type="text" class="form-control" placeholder="$ envio">
    </div>
    <div class="col">
      <label for="formGroupExampleInput">Monto Total</label>
      <input type="text" class="form-control" placeholder="$ total">
    </div>
  </div>

  <hr>

  <button class="btn btn-primary">Grabar</button>

</form>
`;

document.querySelector('#divListPedidos').innerHTML = `
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`;


let btnCargarCliente    = document.querySelector('#btnCargarCliente');
let btnListarPedidos    = document.querySelector('#btnListarPedidos');
let btnCargarPedido     = document.querySelector('#btnCargarPedido');
let divFormCargaCliente = document.querySelector('#divFormCargaCliente');
let divFormCargaPedido  = document.querySelector('#divFormCargaPedido');
let divListPedidos      = document.querySelector('#divListPedidos');

btnCargarCliente.addEventListener('click', ()=>{

        divListPedidos.classList.add('hidden');
        divFormCargaPedido.classList.add('hidden');
        divFormCargaCliente.classList.remove('hidden');

});

btnCargarPedido.addEventListener('click', ()=>{

        divListPedidos.classList.add('hidden');
        divFormCargaCliente.classList.add('hidden');
        divFormCargaPedido.classList.remove('hidden');

});

btnListarPedidos.addEventListener('click', ()=>{

        divFormCargaCliente.classList.add('hidden');
        divFormCargaPedido.classList.add('hidden');
        divListPedidos.classList.remove('hidden');

});
