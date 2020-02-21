import Producto from "./producto.js";
import Precio from "./precio.js";

export default class ElementoPedido {
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */

    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getDescripcion(){
        return `${this.producto.getDescripcion()}, ${this.cantidad}`;
    }
}

let elemento1 = new ElementoPedido 
(
    new Producto ("Hamburguesa", new Precio (100)),
    12
)

/*
console.log(elemento1.getDescripcion());
*/
