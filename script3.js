//variables simples//
let preguntas, compra = null;
const infoP = document.querySelector('.info');
//constructora//
class Producto {
    constructor(nombreValor, precioValor, stockValor) {
        this.nombre = nombreValor;
        this.precio = precioValor;
        this.stock = stockValor;
    }
    info() {
        return `<p> Elegiste ${this.nombre}</p>
                <p> El precio por dia es de $ ${this.precio}  </p>
                <p> La disponibilidad actual de este inmueble es de ${this.stock}`
    }
}
const productoA = new Producto('Casa en Buenos Aires', 5000, 31);
const productoB = new Producto('Casa en Formosa', 3000, 21);
const productoC = new Producto('Casa en Gualeguaychu', 1500, 27);
const productoD = new Producto('Casa en Cordoba', 2500, 17);
const productoF = new Producto('Casa en Jujuy', 1500, 365);
//array//
const listaProductos = [];
listaProductos.push(productoA, productoB, productoC, productoD, productoF);

function menuDeCompra() {

    preguntas = prompt(`Ingrese el nombre del producto que quiere alquilar
        (1) Casa en Buenos Aires
        (2) Casa en Formosa
        (3) Casa en Gualeguaychu
        (4) Casa en Cordoba
        (5) Casa en Jujuy`).toLowerCase();
    if (preguntas == 'Casa en Buenos Aires' || preguntas == 1) {
        infoP.innerHTML = productoA.info();
    } else if (preguntas == 'Casa en Formosa' || preguntas == 2) {
        infoP.innerHTML = productoB.info();
    } else if (preguntas == 'Casa en Gualeguaychu' || preguntas == 3) {
        infoP.innerHTML = productoC.info();
    } else if (preguntas == 'Casa en Cordoba' || preguntas == 4) {
        infoP.innerHTML = productoD.info();
    } else if (preguntas == 'Casa en Jujuy' || preguntas == 5) {
        infoP.innerHTML = productoF.info();
    } else {
        alert('El numero o palabra no es valido. Por favor ingrese el nombre de uno de los productos o el numero correspondiente');
    }

}
menuDeCompra();