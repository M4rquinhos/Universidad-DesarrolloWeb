// console.log(x.length);

// Funcion constructora de tipo persona 
// function Persona(nombre, apellido, email, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.edad = edad;
//     this.nombreCompleto = function() {
//         return this.nombre + " " + this.apellido;
//     }
// }

// Persona.prototype.tel = "55555555";

// let padre = new Persona('roberto', 'gonzalez', 'rgonzales@gmai.com', '30');
// console.log(padre);
// padre.tel = "53453456745";
// console.log(padre.tel);

// let madre =  new Persona('Maria', 'Gonzales', 'mgonzales@gmail.com', '25');
// console.log(madre);
// madre.tel = "645645656";
// console.log(madre.tel);

// padre.nombre = 'Roberto'; // modificar el nombre de padre
// console.log(padre);

// console.log(padre.nombreCompleto());
// console.log(madre.nombreCompleto()); // llamar a la funcion nombreCompleto


// Distinas formas de crear objetos
// Formal
// Convecional
// let miObjeto = new Object();
// let miObjeto2 = {};
// let miCadena1 = new String('hola');
// let miCadena2 = 'hola';
// let miNumero = new Number(10);
// let miNumero2 = 10;
// let miBooleano = new Boolean(true);
// let miBooleano2 = true;
// let arreglo = new Array();
// let arreglo2 = [];
// let funcion = new Function('a', 'b', 'return a + b');
// let funcion2 = function(a, b) {return a + b };



// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     email: "jperes@gmail.com",
//     edad: 30,
//     idioma: "español",
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang(lang){
//         this.idioma = lang.toUpperCase();
//     },
//     // Agregar un metodo
//     get nombreCompleto() {
//         return   this.nombre + " " + this.apellido;                    //`${this.nombre} ${this.apellido}`;
//     },
//     miFuncion: function() {
//         return "Esta es otra funcion dentro del objeto persona";
//     }
// }


// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.email);
// console.log(persona.edad);

// console.log(persona);

// console.log(persona.nombreCompleto());
// console.log(persona.miFuncion());



// Uso de "New" para crear objetos en javascript
// let persona2 = new Object();
// persona2.nombre = "carlos";
// persona2.apellido = "Lara";
// persona2.email = "carlosL@gmai.com";
// persona2.edad = 20;
// persona2.InformacionContacto = function(){
//     return this.email;
// }

// console.log(persona2);
// console.log(persona2.InformacionContacto());



// Acceder a las propiedades de un objeto
// console.log(persona.nombre); //Forma 1 de acceder a las propiedades
// console.log(persona["edad"]); //Forma 2 de acceder a las propiedades (como si fuera un array)

// For in para recorrer las propiedades de un objeto
// for (let nombrePropiedad in persona) { // Donde "propiedad" actua como iterador
//     console.log(nombrePropiedad);
//     console.log(persona[nombrePropiedad]); // Accedemos a los valores de las propiedades del objeto
// }


// Agregar y eliminar propiedades de un objeto
// Agregar una propiedad
// persona.telefono = "55555555";
// persona.tel = "123423";
// console.log(persona);
// Eliminar una propiedad
// delete persona.tel;
// console.log(persona);


// COMO IMPRIMIR UN OBJETO

// Concatenar cada valor de cada propiedad del objeto
// console.log(persona.nombre + " " + persona.apellido);

// Utilizando for in
// for (propiedades in persona) {
//     console.log (persona[propiedades]);
// }

// Utilizando el metodo object
// let personaArrya = Object.values(persona);
// console.log(personaArrya);

// Utilizando el metodo JSON.stringify
// let personsString = JSON.stringify(persona);
// console.log(personsString);


// Metodos getters(para obtener) y setters(para modificar)
// console.log(persona.nombreCompleto);
// console.log(persona.lang); 
// persona.lang = "ingles"; 
// console.log(persona.lang);
// console.log(persona.idioma);



// Uso de call en javascript
let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@gmail.com",
    edad: 30,
    nombreCompleto: function(titulo, tel) {
        // return this.nombre + " " + this.apellido;
        return titulo + ": " + this.nombre + " " + this.apellido + ", tel: " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara",
    email: "clara@gmail.com",
    edad: 25,
}

// Uso de call para usar el metodo nombreCompleto de persona1 con los datos de persona2
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2, "Contacto", "55555555"));



// paso de argumentos a call
console.log(persona1.nombreCompleto("Licenciado", "8711121142"));


// Metodo apply
console.log(persona1.nombreCompleto.apply(persona2));
console.log(persona1.nombreCompleto.apply(persona2, ["Ingeniero", "8711121141"]));
