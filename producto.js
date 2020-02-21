import Precio from "./precio.js";

export default class Producto {
    /**
     * 
     * @param {String} nombre 
     * @param {Precio} precio 
     */

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getDescripcion() {
        return `${this.nombre}, ${this.precio.getPrecio()}`;
    }
}

let producto1 = new Producto("Papas Fritas", new Precio ((200)));

/*
console.log(producto1.getDescripcion());
*/