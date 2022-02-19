// Hoisting xd
// console.log(miFuncion(2,67456));


// Declaracion de una funcion
// function miFuncion(a, b){
//     console.log(arguments.length);
//     return a + b;
// }
// Llamada a la funcion
//   let suma = miFuncion(2,67456);
//  console.log(suma);

// Hoisting: Es el movimiento de las variables y funciones a una posicion mas alta del codigo (se pueden usar las cosas en cualquier lugar, por decirlo asi)



// Funciones de tipo expresion o funciones anonimas
// Declaracion de una funcion tipo expresion
//  let sumar = function(a, b=3){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     return a + b;
//  };

//  let resultado = sumar(2,67456);

// console.log(resultado);


// funciones de tipo self-invoking
// (function (a, b){
//     console.log('Hola mundo: ' + (a + b));
// })(2, 4);

// console.log(typeof miFuncion);

// xd
// let miFuncion2 = miFuncion.toString();
// console.log(miFuncion2);

// ARROW FUNCTIONS
// Se usa const preferiblemente
// ya no se usa la palabra function
// ya no se agrega el parentesis cuando se usa una funcion de flecha
// Ya no se usa la palabra return
// const sumarFlecha = (a, b) => a + b;
// resultado = sumarFlecha(2,67456);
// console.log(resultado);


// Argumentos y parametros
// las variables que recibe una funcion se conocen como parametros 
// las variables que se envian a una funcion se conocen como argumentos
// Aunque, en la vida "real", se nombran y se usan de manera equivalente
// let sumar = function(parametro1, parametro2){
//}
// sumar(argumentos);


// Ejmplo: sumar todos los argumentos
// let resultados = sumarTodo(5,34,14,645,12345,1234);
// console.log(resultados);

// function sumarTodo(){
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma;
// };


// Tipos primitivos
let x = 10;

function cambiarvalor(a){
    a = 20;
}

// Paso por valor
cambiarvalor(x); // x = 10
console.log(x);
// console.log(a);


// Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'edwin';
    p1.apellido = 'Lara';
}

// Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);