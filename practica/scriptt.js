// // let contraseñas = ['nmnbhjkjnbhjk','sdfsde', 'oshfsdfl' , 'sddsdsf', '12345678'];

// // let inseguras =[];
// // let seguras = [];
// // let medias =[]

// // for (let i = 0; i < contraseñas.length; i++) {


// //  let longitudcon = contraseñas[i].length;


// // // if(longitudcon >= 8){
// // //    seguras.push(contraseñas[i])

// // // }else{
// // //    inseguras.push(contraseñas[i]);
// // // }



// // console.log(`contraseñas seguras ${seguras}`);
// // console.log(`contraseñas inseguras ${inseguras}`);


// }


// let numazar = Math.floor((Math.random()*10)+1);

// for(let i=1 ; i<= 10 ;i++)
// let num = Number(prompt('diga un numero')); 


// if(numazar === num){
//     console.log ('gané');

// }else (numazar <= num){
//     console.log('intente con un numero mayor');
// }else if (numazar >= num){
//     console.log('intenta con un numero menor');
// }



let estudiantes = [
    {
        nombre: 'shakira',
        nota: 2,
    },

{
        nombre: 'maria',
        nota: 3.6,
    },

{
        nombre: 'camila',
        nota: 5,
    }

]

for (let i = 0; i <= estudiantes.length; i++) {
    // console.log(` el estudiante ${estudiantes[i].nombre} tiene una nota de ${estudiantes[i].nota}`);

    let nota = estudiantes[i].nota

    if (nota <= 3  ){
console.log(` el estudiante pierde ${estudiantes[i].nombre}` )

} else if ( nota <= 4 ){
    console.log(` èl estudiante nivela  ${estudiantes[i].nombre}.` )

} else {
    console.log(`el estudiante pasa  ${estudiantes[i].nombre}.`)
}
  
}

