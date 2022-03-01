//variables simples//
let preguntas, compra = null;
let montoTotal
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
const productoF = new Producto('Local', 1500, 365);
//array//
const listaProductos = [];
listaProductos.push(productoA, productoB, productoC, productoD, productoF);

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
//funcion calcular el monto//
function calcularMontoTotal(compra, precio, stock) {

    let montoTotal = compra * precio;

    stock -= compra;

    mostrarDatos(stock, montoTotal)

}
//funcion mostrar en consola//
function mostrarEnConsola(resultado){
    console.log(resultado)
}
//find//
const resultadoDeBusqueda1 = listaProductos.find((el) => el.nombre === 'casa');
const resultadoDeBusqueda2 = listaProductos.find((el) => el.nombre === 'ph');
const resultadoDeBusqueda3 = listaProductos.find((el) => el.nombre === 'edificio');
mostrarEnConsola(resultadoDeBusqueda1);
mostrarEnConsola(resultadoDeBusqueda2);
mostrarEnConsola(resultadoDeBusqueda3);
//filter//
const resultadoFiltrado = listaProductos.filter((el) => el.precio === 1500);
mostrarEnConsola(resultadoFiltrado);
//menu compra//
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
            calcularMontoTotal(compra, listaProductos[0].precio, listaProductos[0].stock)
        } else if (preguntas == 'departamento' || preguntas == 2) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            calcularMontoTotal(compra, listaProductos[1].precio, listaProductos[1].stock)
        } else if (preguntas == 'campo' || preguntas == 3) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            calcularMontoTotal(compra, listaProductos[2].precio, listaProductos[2].stock)
        } else if (preguntas == 'ph' || preguntas == 4) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            calcularMontoTotal(compra, listaProductos[3].precio, listaProductos[3].stock)
        } else if (preguntas == 'local' || preguntas == 5) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            calcularMontoTotal(compra, listaProductos[4].precio, listaProductos[4].stock)
        } else if (preguntas == 0 || preguntas == 'salir') {
            break;
        } else {
            alert('El numero o palabra no es valido. Por favor ingrese el nombre de uno de los productos o el numero correspondiente');
        }
    } while (preguntas != 0);
}
menuDeCompra();