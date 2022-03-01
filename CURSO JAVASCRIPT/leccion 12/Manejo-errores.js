"use strict";

// Try-catch
try{
    let x = 10;
    console.log(x);
    // miFuncion();
    throw "Mi error";
}
catch(error){
    console.log(error);
}
finally{
    console.log("termina la revision de errores");
}
console.log("Continuamos...");
// //////////////////////////////////7/////
let resultado = "";

try {
    if(isNaN(resultado)) throw "No es un numero";
    else if (resultado === "") throw "cadena vacia";
    else if (resultado >= 0) throw "Valor positivo";
    else if (resultado < 0) throw "Valor negativo";
} 
catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log("Termina la ejecucion");
}

