class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`;
    }
}

class Orden {

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    } 

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }
    
    agregaProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log("No se puede agregar mas productos");
        }
    }

    calculaTotal() {
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostarOrden() {
        let orden = "";
        for(let producto of this._productos){
            orden += producto.toString() + "\n";
        }
        console.log(`Orden: ${this._idOrden} \nTotal: ${this.calculaTotal()} \nProductos: \n${orden}`);
    }
}

let producto1 = new Producto("Leche", 10);
let producto2 = new Producto("Huevos", 15);
let producto3 = new Producto("Pan", 5);
let producto4 = new Producto("Arroz", 20);
let producto5 = new Producto("Aceite", 30);
let producto6 = new Producto("frituras", 10);
let producto7 = new Producto("Cafe", 15);
let producto8 = new Producto("Leche", 10);

console.log(Producto.contadorProductos);

let orden1 = new Orden();
orden1.agregaProducto(producto1);
orden1.agregaProducto(producto2);
orden1.agregaProducto(producto3);
console.log(orden1.mostarOrden());

let orden2 = new Orden();
orden2.agregaProducto(producto4);
orden2.agregaProducto(producto5);
orden2.agregaProducto(producto6);
orden2.agregaProducto(producto7);
orden2.agregaProducto(producto8);
orden2.agregaProducto(producto1);

console.log(orden2.mostarOrden());
