let miFuncion = function() {
    console.log(" casi Flechado");
}

// Declaración de arrow function formal
// Se puede usar let o const con las arrow functions
// const miFuncionFlecha = () => {
//     console.log("Flechado");
// }

// Con las arrow functions se aplica el concepto de hoisting

// Declaración de arrow function simple o de una una sola linea
// const miFuncionFlecha = () => console.log("Flechado");


// miFuncionFlecha();

// Retorno de una arrow function
// const saludar  = () => {
//     return "Saludos desde el penal";
// };

// Retorno de una arrow function con una sola linea
const saludar = () => "Saludos desde el penal";

console.log(saludar());

// Retorno de una arrow function de un objeto
const returnObject = () => ({
    nombre: "Juan",
    apellido: "Perez"
});

// Retorno de una arrow function con parametro
// const flechaParametros = (mensaje) => console.log(mensaje);
const flechaParametros = mensaje => console.log(mensaje);// Se puede omitir el parentesis cuando solo tiene un parametro
flechaParametros('Hola desde la flecha con parametro');


// Retorno de una arrow function con parametros
const variosParametros = (mensaje, numero) => console.log(mensaje, numero);
variosParametros('Hola desde la flecha con parametros', 2);

