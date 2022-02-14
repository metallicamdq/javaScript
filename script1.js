let nombreProductoA = 'casa';
let nombreProductoB = 'departamento';
let nombreProductoC = 'campo';
let precioProductoA = 5000;
let precioProductoB = 3000;
let precioProductoC = 1500;
let stockProdctoA = 31;
let stockProdctoB = 21;
let stockProdctoC = 27;
let preguntas;
let compra;

function menuDeCompra() {
    do {
        preguntas = prompt(`Ingrese el nombre del producto que quiere alquilar
        (1) casa
        (2) departamento
        (3) campo
        (0) salir`);
        if (preguntas == 'casa' || preguntas == 1) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalC = compra * precioProductoA;
            stockProdctoA -= compra;
            alert('quedan en stock ' + stockProdctoA + ' ' + 'dias disponibles para alquilar');
            alert( 'El precio total es de $' + ' ' + montoTotalC);
        } else if (preguntas == 'departamento' || preguntas == 2) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalD = compra * precioProductoB;
            stockProdctoB -= compra;
            alert('quedan en stock ' + stockProdctoB + ' ' + 'dias disponibles para alquilar');
            alert( 'El precio total es de $' + ' ' + montoTotalD);
        } else if (preguntas == 'campo' || preguntas == 3) {
            compra = prompt('seleccione la cantidad de dias que quiere alquilar el producto');
            let montoTotalF = compra * precioProductoC;
            stockProdctoC -= compra;
            alert('quedan en stock ' + stockProdctoC + ' ' + 'dias disponibles para alquilar');
            alert('El precio total es de $' + ' ' + montoTotalF);
        } else if (preguntas == 0 || preguntas == 'salir') {
            break;
        } else {
            alert('el numero no es valido');
        }
    } while (preguntas != 0);
}
menuDeCompra();