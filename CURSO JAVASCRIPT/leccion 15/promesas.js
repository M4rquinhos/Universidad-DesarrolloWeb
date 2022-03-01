let miPromesa = new Promise((resolve, rejected) => {
    let expresion = true;
    if (expresion) {
        resolve('Todo bien');
    }
    else{
        rejected('Todo mal');
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

let promesa = new Promise((resolve) => {
    // console.log("Inicio de la promesa");
    setTimeout(() => resolve('Saludos con promesa y timeout'), 3000);
    // console.log("Fin de la promesa");
});

// promesa.then(valor => console.log(valor));



// async indica que una funcion regeresa  una promesa
async function miFuncionConPromesa() {
    return 'Hola mundo con promesa y async';
}

// miFuncionConPromesa().then(valor => console.log(valor));


// Await y async
async function funcionPromesaAwait() {
    let miPromesa = new Promise((resolve)=> {
        resolve("Promesa con await");
    });
    console.log(await miPromesa);
}

// funcionPromesaAwait();


// Async, await y setTimeout

async function funcionAwaitTimeOut() {
    let miPromesa = new Promise((resolve) => {
        setTimeout(()=> resolve("miaaaaaaaaaaaaaaaw, ya pasaron 3 segundos xd"), 3000);
    });

    console.log(await miPromesa);
    console.log("Fin de la funcion");
}

funcionAwaitTimeOut();
