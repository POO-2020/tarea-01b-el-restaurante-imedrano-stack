import Direccion from "./direccion.js"

export default class Cliente {
    /**
     * 
     * @param {String} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     */

    constructor (nombre, direccion, telefono)
    {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getPerfil(){
        return `${this.nombre}, ${this.direccion.getFormatoCorto()}, ${this.telefono}`;
    }
}

let cliente1 = new Cliente
(
    "Ivan Medrano",
    new Direccion ("Roberto Gaytan", 264, 264, "Juan Jose Rios II", 28984, "Villa de Alvarez", "Villa de Alvarez"),
    3130658
);

console.log(cliente1.getPerfil());