//variables simples//
let preguntas;
let compra;
//constructora//
function Producto(nombreValor, precioValor, stockValor) {
    this.nombre = nombreValor;
    this.precio = precioValor;
    this.stock = stockValor;
}
Producto()
const productoA = new Producto('casa', 5000, 31);
const productoB = new Producto('departamento', 3000, 21);
const productoC = new Producto('campo', 1500, 27);
const productoD = new Producto('ph', 2500, 17);
const productoF = new Producto('Local', 3500, 365);
//array
const listaProductos = [];
listaProductos.push(productoA,productoB,productoC,productoD,productoF);

console.log(listaProductos)
console.log(listaProductos.indexOf(productoF));
console.log(listaProductos.indexOf(productoA));
console.log(listaProductos.indexOf(productoB));
console.log(listaProductos.indexOf(productoC));
console.log(listaProductos.indexOf(productoD));
//funcion para mostrar datos//
function mostrarDatos(producto, monto) {
    alert('quedan en stock ' + producto + ' ' + 'dias disponibles para alquilar');
    alert('El precio total es de $' + ' ' + monto);
}
//menu compra//
function menuDeCompra() {
    do {
        preguntas = prompt(`Ingrese el nombre del producto que quiere alquilar
        (1) Casa
        (2) Departamento
        (3) Campo
        (4) PH
        (5) Local
        (0) Salir`);
        preguntas = preguntas.toLowerCase();
        if (preguntas == 'casa' || preguntas == 1) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar');
            let montoTotalC = compra * listaProductos[0].precio;
            listaProductos[0].stock -= compra;
            mostrarDatos(listaProductos[0].stock, montoTotalC);
        } else if (preguntas == 'departamento' || preguntas == 2) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalD = compra * listaProductos[1].precio;
            listaProductos[1].stock -= compra;
            mostrarDatos(listaProductos[1].stock, montoTotalD);
        } else if (preguntas == 'campo' || preguntas == 3) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalF = compra * listaProductos[2].precio;
            listaProductos[2].stock -= compra;
            mostrarDatos(listaProductos[2].stock, montoTotalF);
        } else if (preguntas == 'ph' || preguntas == 4) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalG = compra * listaProductos[3].precio;
            listaProductos[3].stock -= compra;
            mostrarDatos(listaProductos[3].stock, montoTotalG);
        } else if (preguntas == 'local' || preguntas == 5) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalH = compra * listaProductos[3].precio;
            listaProductos[4].stock -= compra;
            mostrarDatos(listaProductos[4].stock, montoTotalH);
        } else if (preguntas == 0 || preguntas == 'salir') {
            break;
        } else {
            alert('El numero o palabra no es valido. Por favor ingrese el nombre de uno de los productos o el numero correspondiente');
        }
    } while (preguntas != 0);
}
menuDeCompra();