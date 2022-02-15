// let condicion = false;

// if (condicion) {
//     console.log("CONDICION VERDADERA");
// }
// else{
//     console.log("CONDICION FALSA");
// }

// let numero = 3;

// if (numero == 1) {
//     console.log("El numero es 1");
// } 
// else if (numero == 2){
//     console.log("El numero es 2");
// }
// else if (numero == 3){
//     console.log("El numero es 3");
// }
// else if (numero == 4){
//     console.log("El numeros es 4");
// }
// else{
//     console.log("Numero desconocido");
// }

// Ejercicio estacion del año
// let mes = 2;
// let estacion;

// if (mes == 1 || mes == 2 || mes == 12) {
//     estacion = "Invierno";
//     console.log(estacion)
// }
// else if (mes == 3 || mes == 4 || mes == 5) {
//     estacion = "Primavera";
//     console.log(estacion)
// }
// else if (mes == 6 || mes == 7 || mes == 8) {
//     estacion = "Verano";
//     console.log(estacion)
// }
// else if (mes == 9 || mes == 10 || mes == 11) {
//     estacion = "Otoño";
//     console.log(estacion)
// }
// else{
//     console.log("Mes desconocido");
// }


// Ejercicios hora del dia
// let hora = 10.59;
// let saludo;

// if (hora >= 6 && hora <= 11) {
//     saludo = "Buenos días";
//     console.log(saludo);
// }
// else if (hora >= 12 && hora <= 18) {
//     saludo = "Buenas tardes";
//     console.log(saludo);
    
// }
// else if (hora >= 18 && hora <= 23) {
//     saludo = "Buenas noches";
//     console.log(saludo);
// }
// else if(hora >= 0 && hora <= 5){
//     saludo = "mimido";
//     console.log(saludo);
// }
// else{
//     console.log("Hora desconocida");
// }


// Estrucutra de control switch
let numero = 10;
let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "El numero es 1";
        break;
    case 2:
        numeroTexto = "El numero es 2";
        break;
    case 3:
        numeroTexto = "El numero es 3";
        break;
    case 4:
        numeroTexto = "El numero es 4";
        break;
    default:
        numeroTexto = "Numero desconocido";
        break;
}

console.log(numeroTexto);


let mes = 2;
let estacion;

switch (mes) {
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Este mes no pertenece a ninguna estacion";
        break;
}

console.log(estacion);

// La estructura de control switch tambien compara el tipo de dato