export default class Precio {
    /**
     * 
     * @param {number} Precio El precio del producto
     * 
     */
    constructor(valor){
        this.valor = valor;
    }

    getPrecio() {
        return `$${this.valor}`;   
    }
}
/*
let precio1 = new Precio (500)

console.log(precio1.getPrecio());
*/