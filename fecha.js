export class Fecha {
    constructor(fecha){
        this.fecha = new Date;
    }

    getAños() {
        return `${this.fecha.getFullYear()}`;
    }

    getMeses() {
        return `${this.fecha.getMonth() + 1}`;
    }

    getSemanas() {
        return `${this.fecha.getMonth() + 1}`;
    }
}
let app = new Fecha();

let fecha1 = new Fecha

app.getAños();

console.log(fecha1.getAños());
console.log(fecha1.getMeses());