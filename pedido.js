import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import ElementoPedido from "./elemento-pedido.js"
import Precio from "./precio.js";
import Producto from "./producto.js"

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     * @param {ElementoPedido} elementosPedidos 
     */
    constructor(fecha, hora, cliente, elementosPedidos){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = new Array();
    }

    getResumen(){
        return `${this.fecha.getFecha()},${this.hora.getFormato12()},${this.getNumeroElementos()} elementos con ${this.getNumeroElementos()}`;
    }

    getNumeroElementos(){
        return `${this.elementosPedidos.length}`;
    }

    getNumeroProductos(){
        var numProductos = 0;
        this.elementosPedidos.forEach(elemento => {
            numProductos+=elemento.cantidad;
        });
        return numProductos;
    }

    getCostoTotal(){
        var total = 0;
        this.elementosPedidos.forEach(elemento => {
            total += elemento.cantidad * elemento.producto.precio.valor;
        });
        return new Precio(total).getPrecio();
    }

    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }

    listarElementos(){
        this.elementosPedidos.forEach((elemento, i) => {
            console.log(`${i} - ${elemento.getDescripcion()}`)
            });
    }
}
