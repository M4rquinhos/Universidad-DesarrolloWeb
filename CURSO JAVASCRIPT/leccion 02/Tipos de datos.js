// TIPOS DE DATOS EN JAVASCRIPT

// Variable de tipo string
var nombre = "Juan";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato numerico 
var numero = 10;
console.log(numero);

// Tipo de dato objeto
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "123456789",
    edad: 30
};
console.log(typeof objeto);

// Tipo de dato booleano
var verdadero = true;
var falso = false;
console.log(typeof verdadero);
console.log(typeof falso);

// Tipo de dato funcion
function sumar(a, b) {
    return a + b;
}
console.log(sumar(1, 2));

// Tipo de dato symbol
var simbolo = Symbol("simbolo");
console.log(typeof simbolo);

// Tipo class
class Persona {
    constructor(nombre, apellido, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.edad = edad;
    }
}
console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);

// Tipo de dato null
var y = null;
console.log(typeof y);

// Tipo de dato array
var array = [1, 2, 3, 4, 5];
console.log(array);
console.log(typeof array);

// Tipo de datoe emtpy string
var cadena = "";
console.log(cadena);
console.log(typeof cadena);