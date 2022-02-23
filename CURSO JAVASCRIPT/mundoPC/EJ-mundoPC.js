class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}


class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}


class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this.marca}]`;
    }
}



class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}



class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}



class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);	
    }    
}

// Ratones
let raton1 = new Raton("USB", "Logitech");
let raton2 = new Raton("Bluetooth", "Dell");
// Teclados
let teclado1 = new Teclado("USB", "Logitech");
let teclado2 = new Teclado("Bluetooth", "Dell");
// Monitores
let monitor1 = new Monitor("LG", "15 pulgadas");
let monitor2 = new Monitor("Samsung", "17 pulgadas");
// Computadoras
let pc1 = new Computadora("HP", monitor1, teclado1, raton1);
let pc2 = new Computadora("Dell", monitor2, teclado2, raton2);
// Ordenes
let orden1 = new Orden();
orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden1.agregarComputadora(pc1);
let orden2 = new Orden();
orden2.agregarComputadora(pc1);
orden2.agregarComputadora(pc2);
orden2.agregarComputadora(pc1);
orden2.agregarComputadora(pc2);
orden2.agregarComputadora(pc1);
orden2.agregarComputadora(pc2);


// Ratones
console.log(raton1.toString());
console.log(raton2.toString());
// Teclados
console.log(teclado1.toString());
console.log(teclado2.toString());
// Monitores
console.log(monitor1.toString());
console.log(monitor2.toString());
// Computadoras
console.log(pc1.toString());
console.log(pc2.toString());
// Ordenes
orden1.mostrarOrden();
orden2.mostrarOrden();