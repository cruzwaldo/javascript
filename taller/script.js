

//PRIMER PUNTO DEL TALLER

// let colores = ['azul', 'verde', 'rojo', 'morado', 'amarillo'];


// console.log('primer color ' +  colores[0]);
// console.log( 'ultimo color ' + colores [colores. length - 1])

// SEGUNDO PUNTO DEL TALLER

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

//TERCER PUNTO DEL TALLER

// let numeros = [ 1,2,5,7,10,50,90,110,500];
// let numeromayor = 0;
// for (let i = 1; i < numeros.length; i++) {

//     if (numeros [i] > numeromayor){
//         numeromayor = numeros[i];
//     }  

//     }
//  console.log( "el numero mayor es:" + numeromayor)       

// CUARTO PUNTO DEL TALLER

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

// QUINTO PUNTO DEL TALLER


// let productos = [
//   { nombre: "Mouse", precio: 50000 },
//   { nombre: "Teclado", precio: 120000 },
//   { nombre: "Monitor", precio: 800000 }
// ];

// let precioTotal = 0;

// for (let producto of productos) {
// //   precioTotal += producto.precio;
// // }

// console.log("El precio total es: " + precioTotal);

// SEXTO PUNTO DEL TALLER

// let estudiantes = [
//   { nombre: "Ana", nota: 4.5 },
//   { nombre: "Pedro", nota: 2.8 },
//   { nombre: "Laura", nota: 4.0 },
//   { nombre: "Carlos", nota: 2.5 }
// ];

// for (let estudiante of estudiantes) {
//   if (estudiante.nota >= 3.0) {
//     console.log(estudiante.nombre + " - " + estudiante.nota);
//   }
// }


//SEPTIMO PUNTO DEL TALLER

// let ejercicios = [
//   { nombre: "Sentadilla", peso: 80 },
//   { nombre: "Press banca", peso: 60 },
//   { nombre: "Peso muerto", peso: 120 },
//   { nombre: "Dominadas lastradas", peso: 25 }
// ];

// let maximoPeso = 0;
// let ejercicioMasPesado = "";

// for (let ejercicio of ejercicios) {
//   if (ejercicio.peso > maximoPeso) {
//     maximoPeso = ejercicio.peso;
//     ejercicioMasPesado = ejercicio.nombre;
//   }
// }

// console.log(`El ejercicio más pesado es ${ejercicioMasPesado} con ${maximoPeso} kg`);




// OCTAVO PUNTO DEL TALLER

let boxeadores = [
  { nombre: "Floyd Mayweather", victorias: 50, derrotas: 0, kos: 27 },
  { nombre: "Mike Tyson", victorias: 50, derrotas: 6, kos: 44 },
  { nombre: "Muhammad Ali", victorias: 56, derrotas: 5, kos: 37 },
  { nombre: "Gennadiy Golovkin", victorias: 42, derrotas: 2, kos: 37 }
];

console.log("ESTADÍSTICAS DE BOXEADORES");

let boxeadorMasVictorias = boxeadores[0];
let boxeadorMasKOs = boxeadores[0];

for (let boxeador of boxeadores) {
  let peleasTotales = boxeador.victorias + boxeador.derrotas;
  let porcentajeVictorias =
    (boxeador.victorias / peleasTotales) * 100;
  let porcentajeKO =
    (boxeador.kos / peleasTotales) * 100;

  console.log(boxeador.nombre);
  console.log(
    `Peleas: ${peleasTotales} (${boxeador.victorias}V - ${boxeador.derrotas}D)`
  );
  console.log(`% de victorias: ${porcentajeVictorias.toFixed(1)}%`);
  console.log(`% de KO: ${porcentajeKO.toFixed(1)}%`);

  if (boxeador.victorias > boxeadorMasVictorias.victorias) {
    boxeadorMasVictorias = boxeador;
  }

  if (boxeador.kos > boxeadorMasKOs.kos) {
    boxeadorMasKOs = boxeador;
  }
}

console.log("RESUMEN");
console.log(
  `Boxeador con más victorias: ${boxeadorMasVictorias.nombre} (${boxeadorMasVictorias.victorias} victorias)`
);
console.log(
  `Boxeador con más KOs: ${boxeadorMasKOs.nombre} (${boxeadorMasKOs.kos} KOs)`
);





















// const productos = [

//     {
// nombre: 'tv';
// marca: 'samsung';
// precio:3000000;
// stock:20;
// modelo: xyzca;
//     }


//    {
// nombre:'table';
// marca:'lenovo';
// precio: 800000;
// stock:10;
// modelo:kito;
//     }
    
//        {
// nombre:'computador';
// marca:'tochiba';
// precio:3200000;
// stock:5;
// modelo: sdhte;
//     }
    
//        {
// nombre:'celular';
// marca: 'motorola';
// precio:4800000;
// stock:3;
// modelo:razr;
//     }
    
//        {
// nombre:'impresoras';
// marca: 'hp';
// precio:750000;
// stock:10;
// modelo:hpjtu;
//     }
    
//        {
// nombre:'camaras';
// marca:'sony'
// precio:890000
// stock: 15
// modelo: asiasi
//     }
    
// ]

// let inversion = 0;
