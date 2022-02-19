// FORMA ANTIGUA DE CREAR UN ARREGLO
// let autos = new Array('BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Ferrari');


// FORMA NUEVA DE CREAR UN ARREGLO
const autos = ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Ferrari'];
console.log(autos);

// Recorrer un arreglo con un FOR
for (let i = 0; i < autos.length; i++) {
    const element = autos[i];
    console.log("el indice " + i + " pertenece al auto: " + element);
}

// Modificar elementos de una arreglo
autos[3] = 'Mazda';
console.log(autos);


// Agregar elementos a un arreglo
autos.push('Chevrolet');
console.log(autos);


console.log(autos.length);
autos[autos.length] = 'Toyota';
console.log(autos);


// Preguntar si es un arreglo
console.log(Array.isArray(autos));
console.log(autos instanceof Array);

