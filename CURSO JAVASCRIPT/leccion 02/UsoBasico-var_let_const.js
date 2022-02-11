// sintaxis para declarar variables

// Forma de declarar variables con var (ya no se usa)
var variable;


// Forma de declarar variables con let (usada actualmente)
let variable2; 

// Forma de declarar variables con const (no se puede reasignar)
const constante = null;

// Variable sin palabras reservadas (no es buena practica)
let nombre;
nombre = "Juan";
console.log(nombre);

const apellido = "Perez";



// Buenas practicas para nombres de variables
// let nombreCompleto = "Juan Perez";
// console.log(nombreCompleto);

let x, y;
x = 10;
y = 20;
let z = x + y;
console.log(z);


// Regglas para definir nombres de variables 
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Gonzalez";
console.log(nombreCompleto);
console.log(nombrecompleto);

// 1. No puede comenzar con numeros
// 2. No puede contener espacios
// 3. No puede contener caracteres especiales excepto $nombreDeVariable
// 4. No puede contener guiones bajos
// 5. No puede contener guiones medios