//variables simples//
let preguntas, compra = null;
let montoTotal;
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
                <p> quedan en stock ${this.stock} dias disponibles para alquilar </p>
                <p> El precio total es de $ ${this.precio} `
    }
}
const productoA = new Producto('casa', 5000, 31);
const productoB = new Producto('departamento', 3000, 21);
const productoC = new Producto('campo', 1500, 27);
const productoD = new Producto('ph', 2500, 17);
const productoF = new Producto('Local', 1500, 365);
//array//
const listaProductos = [];
listaProductos.push(productoA, productoB, productoC, productoD, productoF);

function menuDeCompra() {
    do {
        preguntas = prompt(`Ingrese el nombre del producto que quiere alquilar
        (1) Casa
        (2) Departamento
        (3) Campo
        (4) PH
        (5) Local
        (0) Salir`).toLowerCase();
        if (preguntas == 'casa' || preguntas == 1) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar');
            infoP.innerHTML = productoA.info();
        } else if (preguntas == 'departamento' || preguntas == 2) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            infoP.innerHTML = productoB.info();
        } else if (preguntas == 'campo' || preguntas == 3) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            infoP.innerHTML = productoC.info();
        } else if (preguntas == 'ph' || preguntas == 4) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            infoP.innerHTML = productoD.info();
        } else if (preguntas == 'local' || preguntas == 5) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            infoP.innerHTML = productoF.info();
        } else if (preguntas == 0 || preguntas == 'salir') {
            break;
        } else {
            alert('El numero o palabra no es valido. Por favor ingrese el nombre de uno de los productos o el numero correspondiente');
        }
    } while (preguntas != 0);
}
menuDeCompra();