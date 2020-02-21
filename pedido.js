import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import ElementoPedido from "./elemento-pedido.js"

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
        this.elementosPedidos = elementosPedidos;
    }

    getResumen(){

    }

    getNumeroElementos(){

    }

    getNumeroProductos(){

    }

    getCostoTotal(){

    }

    agregarElemento(){

    }

    listarElementos(){

    }
}