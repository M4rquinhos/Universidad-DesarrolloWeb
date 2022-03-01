miFuncion1();
mFuncion2();

function miFuncion1() {

    console.log("Funcion 1");
}

function mFuncion2() {
    console.log("Funcion 2");
}

// Funcion callback

// Funcion que se usara como parametro a otra funcion
function imprimir(mensaje) {
    console.log(mensaje);
}


// Funcion que recibe otra funcion como argumento
function suma(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(`Resultado: ${resultado}`);
}

suma(3, 4, imprimir);

// Llamada secuencial xd



// Llamdas asincronas con uso de de setTimeout
// function miFuncionCallback() {
//     console.log("Saludo asincrono despues de 3 segundos");
// }

// Usanddo la funcion como parametro
// setTimeout(miFuncionCallback, 3000);

// Usando directamente la funcion
// setTimeout(function() {console.log("Saludo ascincrono 2, más asincrono que nunca")}, 4000)

// Usando arrow function
// setTimeout(() => console.log("Saludo asincrono con arrow functions"), 5000);


// Llamadas asincronas con uso de setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 2000);


