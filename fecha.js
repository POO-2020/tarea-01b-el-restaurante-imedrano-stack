export default class Fecha {
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

    formatearMsecs = (dividendo) => Math.trunc((Date.now() - this.fecha) / dividendo);

    getAños() {
        return `${this.fecha.getFullYear()}`;
    }

    getMeses() {
        let mes = this.meses[this.fecha.getMonth()];

        return mes;
    }

    getSemanas() {
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear();
        return `${añosTranscurridos * 52} semanas.`;
    }

    getDias() {
        return `${this.fecha.getDate()}`;
    }

    getFecha() {
        return `${this.fecha.getDate()}`+"/"+`${this.fecha.getMonth()+1}`+"/"+`${this.fecha.getFullYear()}`;
    }

    getDiaFecha() {
        let diaSemana = this.diaSemana[this.fecha.getDay()]
        return diaSemana;
    }
}


let fecha1 = new Fecha


/*
console.log(fecha1.getAños());
console.log(fecha1.getMeses());
console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());  
console.log(fecha1.getDias());   
console.log(fecha1.getSemanas());
*/