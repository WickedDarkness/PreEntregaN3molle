//script para elegir un numero de producto pero que tiene un error ya que al poner exit muestra el texto de "ingresaste numero incorrecto"
/* function compra() {
    let nombre = prompt("Buen día, por favor ingresa tu nombre a continuación");
    let eleccion = prompt(nombre + " por favor, ingresa el numero de producto del 1 al 9");
    if (eleccion > 9 || eleccion <= 0) {
        alert("Ingresaste un número incorrecto");
    } else {
        do {
          alert("El producto número " + eleccion + " fue agregado al carrito.");
          eleccion = prompt(nombre + " por favor, ingrese otro numero o escriba Exit para finalizar.");
          if (eleccion == "Exit") {
            alert("Se agregaron todos los productos al carrito.");
            break;
          }
        } while (eleccion <= 9 && eleccion > 0 && eleccion != null);
         alert("Ingresaste un número incorrecto");
    }
} */

/* function compra() {
  const nombre = prompt("Buen día, por favor ingresa tu nombre a continuación");
  let eleccion = prompt(
    nombre + " por favor, ingresa el numero de producto del 1 al 9"
  );
  alert("El producto número " + eleccion + " fue agregado al carrito.");
  flag = true;
  if (eleccion <= 9 && eleccion > 0 && eleccion != null) {
    while (flag) {
      eleccion = prompt(
        nombre +
          " por favor, ingrese otro numero o escriba Exit para finalizar."
      );
      if (eleccion <= 9 && eleccion > 0 && eleccion != null) {
        alert("El producto número " + eleccion + " fue agregado al carrito.");
      } else if (eleccion == "Exit") {
        flag = false;
        alert("Se agregaron todos los productos al carrito.");
      } else {
        flag = false;
        alert("Ingresaste un número incorrecto");
      }
    }
  } else {
    alert("Ingresaste un número incorrecto");
  }
} */

let carritoHTML = document.getElementById("carrito");
carritoHTML.innerHTML = "<p>Tu carrito</p><div></div>";
document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left").append(carritoHTML);

let carritoInner = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito div");
carritoInner.className = "carrito-contenido";
carritoInner.innerHTML = "<ul></ul>";

let carritoList = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito .carrito-contenido ul");


/* Al clickear en los botones + de cada procducto se añaden al carrito.
Luego, al ir hasta la barra superior, al apretar el boton de la tarjeta de credito se suman 
todos los productos seleccionados + su iva y luego se muestra el total por consola y por alert. */

// Clase que crea mis productos cuando los sumo
class Producto {
    constructor(codigo, nombre, id, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.id = id;
      this.precio = parseFloat(precio);
    }

    sumaIva() {
      this.precio = this.precio * 1.21;
   }
}

// Array y funcion que agrega los productos seleccionados a dicho array
const productos = []
function addToCart(codigo, nombre, id, precio) {
  productos.push(new Producto(codigo, nombre, id, precio));
  for (const producto of productos) {
    let carritoListLi = document.createElement("li");
    carritoListLi.innerHTML = `<b> ${producto.nombre} </b> 
                               <p> / ${producto.precio}</p>`;
    document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito .carrito-contenido ul").append(carritoListLi);
  }
}
//Ya crea los li en donde tiene que, pero los loopea mal, agregando el nuevo + los viejos cuando solo
// deberia agregar el nuevo



// Una salida por consola para verificar el proceso
console.log(productos);

//Funcion que calcula el iva de los productos de forma individual
// y luego recorre el array de productos para sumar uno a uno en una variable
// llamada total. Finalmente una salida por alert para el usuario y una por consola para el 
// programador.
function comprar(productos) {
  let total = 0;
  for (const producto of productos) producto.sumaIva();
  for (let i = 0; i < productos.length; i++) {
    total = total + productos[i].precio;
    console.log(productos[i].precio);
  }
  console.log(total);
  alert(total);
}
