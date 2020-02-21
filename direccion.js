export default class Direccion {
    /**
     * 
     * @param {string} calle 
     * @param {number} noExterior 
     * @param {number} noInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */

    constructor(calle, noExterior, noInterior, colonia, codigoPostal, ciudad, municipio)
    {
        this.calle = calle;
        this.noExterior = noExterior;
        this.noInterior = noInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }

    getFormatoCorto(){
        return `${this.calle}, ${this.noExterior}, ${this.noInterior}, ${this.colonia}, ${this.codigoPostal}, ${this.ciudad}, ${this.municipio}`;
    }

    getFormatoExtendido(){
        return `Calle: ${this.calle}, No. Exterior: ${this.noExterior}, No. Interior: ${this.noInterior}
        , Colonia: ${this.colonia}, Codigo Postal: ${this.codigoPostal}, Ciudad: ${this.ciudad}
        , Municipio: ${this.municipio}`;
    }
}

let direccion1 = new Direccion 
(
    "Roberto Gaytan",
    264,
    264,
    "Juan Jose Rios II",
    28984,
    "Villa de Alvarez",
    "Villa de Alvarez"
);

console.log(direccion1.getFormatoCorto());
console.log(direccion1.getFormatoExtendido());