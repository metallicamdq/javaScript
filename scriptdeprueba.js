// // let nombreProductoA = "casa"
// // let stockProdctoA = 30
// // let precioProductoA = 10000
// // let nombreProductoB = "departamento"
// // let stockProdctoB = 21
// // let precioProductoB = 2000

// let nombreCompra;
// let cantidadComprada;

// function menuP() {
//     do {
//         let nombreProductoA = "casa"
//         let stockProdctoA = 30
//         let precioProductoA = 10000
//         let nombreProductoB = "departamento"
//         let stockProdctoB = 21
//         let precioProductoB = 2000
//         nombreCompra = prompt(`Ingrese el nombre del producto que quiere alquilar
//         (1) casa
//         (2) departamento
//         (0) salir`)
//         if (nombreCompra == 1 || nombreCompra == 'casa') {
//             cantidadComprada = parseInt(prompt("Ingrese la cantidad de dias que quiera alquilar la casa"))

//             if (nombreCompra == nombreProductoA) {
//                 stockProdctoA = stockProdctoA - cantidadComprada;
//                 precioTotalVenta = cantidadComprada * precioProductoA;
//                 alert('Quedan en stock' + ' ' + stockProdctoA + ' ' + 'dias disponibles para alquilar')
//                 alert('el precio total a pagar es de: $' + ' ' + precioTotalVenta);
//                 if (cantidadComprada >= 31) {
//                     alert('no tenemos stock del producto')
//                 }
//             }
//         } else if (nombreCompra == 2 || nombreCompra == 'departamento') {
//             cantidadComprada = parseInt(prompt("Ingrese la cantidad de dias que quiera alquilar el departamento"))
//             if (nombreCompra == nombreProductoB) {
//                 stockProdctoB = stockProdctoB - cantidadComprada;
//                 precioTotalVenta = cantidadComprada * precioProductoB;
//                 console.log('Quedan en stock' + ' ' + stockProdctoB + ' ' + 'dias disponibles para alquilar')
//                 alert('el precio total a pagar es de: $' + ' ' + precioTotalVenta);
//                 if (cantidadComprada >= 22) {
//                     alert('no tenemos stock del producto')

//                 }
//             }

//         }

//     } while (nombreCompra != 0);

// }
// menuP();