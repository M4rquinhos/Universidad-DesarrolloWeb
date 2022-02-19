// let contador = 10;

// ciclo while
// while (contador < 10) {
//     console.log(contador);
//     contador++;
// }

// Ciclo do while
// do {
//     console.log(contador);
//     contador++;
// } while (contador < 10);


// Ciclo for
// let cadena = "Hola mundo";
// for (let contador = 0; contador < cadena.length; contador++) {
//     console.log(cadena[contador]);
// }

// Break y continue
inicio: //label
for (let contador = 0; contador < 10; contador++) {
    if (contador === 5) {
        // break inicio;
        continue inicio; //label
    }
    console.log(contador);
}
