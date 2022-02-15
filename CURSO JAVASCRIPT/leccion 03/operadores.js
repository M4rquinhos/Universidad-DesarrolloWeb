// Operadores arirmeticos
// let a = 3;
// let b = 2;
// let z = a + b;

// console.log("Resultado de la suma es: " + z);

// z = a - b;
// console.log("Resultado de la resta es: " + z);

// z = a * b;
// console.log("Resultado de la multiplicacion es: " + z);

// z = a / b;
// console.log("Resultado de la division es: " + z);

// z = a % b;
// console.log("Resultado del modulo es: " + z);

// z = a ** b;
// console.log("Resultado de la potencia es: " + z);


// Operadores de incremento y decremento
// Incremento
// Pre-incremento (el operador ++ antes de la variable)
// z = ++a;
// console.log(a);
// console.log("Resultado del pre-incremento es: " + z);


// Post-incremento (el operador ++ despues de la variable)
// z = b++;
// console.log(b);
// console.log("Resultado del post-incremento es: " + z);

// Decremento
// Pre-decremento (el operador -- antes de la variable)
// z = --a;
// console.log(a);
// console.log("Resultado del pre-decremento es: " + z);

// Post-decremento (el operador -- despues de la variable)
// z = b--;
// console.log(b);
// console.log("Resultado del post-decremento es: " + z);


// Gerarquia de operadores
// let a = 3, b = 2, c = 1, d = 4;

// let z = a * b + c / d;
// console.log(z);

// z = c + a * b / d;
// console.log(z);

// z = (c + a) * b / d;
// console.log(z);

// Operadores de asignacion
// let a = 1;
// a += 3; // a = a + 3;
// console.log(a);

// a -= 2; // a = a - 3;
// console.log(a);

// a *= 2; // a = a * 2;
// console.log(a);

// a /= 2; // a = a / 2;
// console.log(a);

// a %= 2; // a = a % 2;
// console.log(a);

// a **= 2; // a = a ** 2;
// console.log(a);


// Operadores de comparacion
// let a = 3, b = 2, c = "3";

// let z = (a == c); //revisa el valor sin importar el tipo de dato
// console.log(z);

// z = (a === c); //revisa el valor y el tipo de dato
// console.log(z);


// z = (a != c); 
// console.log(z);

// z = (a !== c);
// console.log(z);

// let z = (a < b);
// console.log(z);

// z = (a <= b);
// console.log(z);

// z = (a > b);
// console.log(z);

// z = (a >= b);
// console.log(z);


// let numero = 34;

// if (numero % 2 == 0) {
//     console.log("El numero es par");
// } 
// else {
//     console.log("El numero es impar");
// }



// let edad = 18;

// if (edad >= 18) {
//     console.log("Puedes votar");
// } 
// else {
//     console.log("No puedes votar");   
// }


// Operadores logicos
// Operador AND
// let a = 5;
// let min = 0, max = 10;

// if (a >= min && a <= max) {
//     console.log("El numero esta dentro del rango");    
// } 
// else {
//     console.log("El numero esta fuera del rango");
// }

// // OPERADOR OR
// let vacaciones = false, diaDescanso = true;

// if (vacaciones == true ||  diaDescanso== true) {
//     console.log("El padre puede ver el juego de futbol de su hijo"); 
// } else {
//     console.log("El padre no puede ver el juego de futbol de su hijo");
// }

// operador ternario
// let resultado = (3 > 2) ? "VERDADERO" : "FALSO"; //condicion ? expr1 : expr2
// console.log(resultado);


// let numero = 10;

// resultado = (numero % 2 ==0 ) ? "El numero es par" : "El numero es impar";
// console.log(resultado);


// Covertir string a numero
let miNumero = "10x";
// console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un numero");
}
else {
    console.log("Es un numero");
}


let resultado = (edad >= 18) ? "Puedes votar" : "No puedes votar";
