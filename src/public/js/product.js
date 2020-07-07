miStorage = window.localStorage;

async function getProduct() {
  let Productos = "http://localhost:3500/getProductos";
  var getProduct = await $.get(Productos);

  local("productos", getProduct);
}

//------------Guardar de forma local información-------------
function local(key, p) {
  miStorage.setItem(key, JSON.stringify(p));
}

function addCar(id) {
  var local = localStorage.getItem("productos");
  local = JSON.parse(local); //local[name].InvNombre_Producto

  //Busco en el almacenado local el producto
  for (const name in local) {
    if (local[name].idProducto == id) {
      let nombre = local[name].nombreProducto;
      let precios = local[name].precioUnitario;
      console.log(nombre, precios);
    }
  }
}
