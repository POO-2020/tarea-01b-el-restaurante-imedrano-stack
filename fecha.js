export class Fecha {
    constructor(dia, mes, año){
        this.fecha= new Date;
        this.diaSemana = 
        [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado"
        ];
        this.meses= 
        [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ];
    }

    getAños() {
        return `${this.fecha.getFullYear()}`;
    }

    getMeses() {
        let mes = this.meses[this.fecha.getMonth()];

        return mes;
    }

    getSemanas() {
        var difMseg = Date.now()-this.fecha;
        var mSegSemana= 1000* 60*60*24*7;
        var semanas= Math.trunc(difMseg/mSegSemana);
        return semanas;
    }

    getDias() {

    }

    getFecha() {

    }

    getDiaFecha() {

    }
}


let fecha1 = new Fecha



console.log(fecha1.getAños());
console.log(fecha1.getMeses());
console.log(fecha1.getSemanas());