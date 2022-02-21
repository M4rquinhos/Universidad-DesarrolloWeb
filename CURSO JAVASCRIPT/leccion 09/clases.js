// Clase
class Persona{

    static contadorPersona = 0; //Atributo de la clase

    static get MAX_OBJ(){
        return 5;
    }


    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        } 
        else{
            console.log('Se ha alcanzado el limite de objetos');
        }
        
    }

    // Nombre
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    // Apellido
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return  this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el método toString de la clase Object (clase padre)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecicion)
        // el metodo que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo.
        return this.nombreCompleto();
    }

    // Metodos estaticos
    static saludar(){
        console.log('Hola madafaker');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

// Herencia
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' - ' + this._departamento;
    }

}


// Objeto
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

// objeto de la clase hija
let empleado1 = new Empleado('Maria', 'Juarez', 'Ventas');
console.log(empleado1.toString()); 
// console.log(empleado1.nombre); //get nombre

 // Con las clases no se puede aplicar hoisting

//  let persona2 = new Persona('Pedro', 'Lara');
// console.log(persona2.nombre); //get nombre


// Heredar metodos de la clase padre
// console.log(empleado1.nombreCompleto());

// console.log(empleado1.toString());


// persona1.saludar(); // No se puede llamar a un metodo estatico desde un objeto

// Persona.saludar(); // Se puede llamar a un metodo estatico desde la clase padre

// Persona.saludar2(persona1);

// Los metodos estaticos se pueden heredar a clases hijas
// Empleado.saludar();
// Empleado.saludar2(empleado1);


// Atributos estaticos
// console.log(persona1.contadorObjetosPersona);
// console.log(Persona.contadorObjetosPersona);
// Los atributos estaticos se pueden heredar a clases hijas
// console.log(Empleado.contadorObjetosPersona);

// console.log(persona1.email);
// console.log(empleado1.email);
// console.log(Persona.email);
// console.log(Empleado.email);

console.log(Persona.contadorPersona);

let persona2 = new Persona('Pedro', 'Lara');
console.log(persona2.toString());

console.log(Persona.contadorPersona);


let persona3 = new Persona('Mariano', 'lara');

let persona4 = new Persona('Sofia', 'Hernandez');

let persona5 = new Persona('Ana','Garcia');


console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);


console.log(persona5.toString());