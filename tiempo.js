export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */

    constructor(hora, minutos, periodo){
        this.hora = new Date;
        this.minutos = new Date;
        this.periodo = periodo;
    }

    getFormato12(){
        if (this.hora < 12){
            return `${this.hora.getHours()-12 + ":" + this.minutos.getMinutes() + " p.m."}`
        }
        else {
            return `${this.hora.getHours() + ":" + this.minutos.getMinutes() + " a.m."}`
        }   
    }

    getFormato24(){
        return `${this.hora.getHours() + ":" + this.minutos.getMinutes()}`
    }
}

let fecha1 = new Tiempo


/*
console.log(fecha1.getFormato12());
console.log(fecha1.getFormato24());
*/