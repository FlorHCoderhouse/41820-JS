//Clase constructora de objetos PF
class PF {

    constructor(capital, dias, moneda, numeroCuenta) {
        this.capital = parseFloat(capital);
        this.fecha = new Date();
        this.dias = parseInt(dias);
        this.moneda = moneda;
        this.numeroCuenta = numeroCuenta;
        this.intereses = 0;
        this.acreditacion = new Date();
        this.gananciaTotal = 0;
    }

    //Calculo los intereses, teniendo en cuenta el capital, el tipo de moneda, la tasa vigente y los días que se quiere dejar la plata
    calcularIntereses(tasaPesos, tasaDolares) {
        if (this.moneda == 'pesos') {
            this.intereses = (this.capital * (tasaPesos / 365 * this.dias));
            this.intereses = parseFloat(this.intereses.toFixed(2));
        } else {
            this.intereses = (this.capital * (tasaDolares / 365 * this.dias));
            this.intereses = parseFloat(this.intereses.toFixed(2));
        }
    }

    //Calculo la ganancia total
    calcularGananciaTotal() {
        this.gananciaTotal = this.intereses + this.capital;
    }

    //Calculo cuándo se va a acreditar el dinero en base a la cantidad de días que el usuario elige dejar la plata
    calcularFechaAcreditacion() {
        this.acreditacion.setDate(this.fecha.getDate() + this.dias);
        this.acreditacion = this.acreditacion.toLocaleDateString();
    }

}