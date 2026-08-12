
// let colores = ['azul', 'verde', 'rojo', 'morado', 'amarillo'];


// console.log('primer color ' +  colores[0]);
// console.log( 'ultimo color ' + colores [colores. length - 1])


// let numeros =[1,2,3,4,5,6,7,8,9,10];
// console.log('la cantidad de elementos es de ' + numeros.length);

// let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let i = 1; i < numeros.length; i++) {
//     // console.log('jgyudnj')

//     if ( numeros[i] % 2 ===0 ){
// console.log('numeros impares')
// console.log (numeros[i])
//     }

// }

// let numeros = [ 1,2,5,7,10,50,90,110,500];
// let numeromayor = 0;
// for (let i = 1; i < numeros.length; i++) {

//     if (numeros [i] > numeromayor){
//         numeromayor = numeros[i];
//     }  

//     }
//  console.log( "el numero mayor es:" + numeromayor)       



// let productos = [
//     { nombre: "mouse", precio: 50000 },
//      { nombre: "teclado", precio: 120000 },
//     { nombre:  "monitor", precio: 800000},
//                     ];

// let preciototal = 0;
// for (let i = 0; i < productos.length; i++) {

//     let precio = productos[i].precio;
//   console.log(nombre.precio[i] + nombre.precio[i])
// }


let productos = [
  { nombre: "Mouse", precio: 50000 },
  { nombre: "Teclado", precio: 120000 },
  { nombre: "Monitor", precio: 800000 }
];

let precioTotal = 0;

for (let producto of productos) {
  precioTotal += producto.precio;
}

console.log("El precio total es: " + precioTotal);