class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = 4;
    }

    detalle() {
        console.log(this.marca + ' ' + this.modelo);
    }
}

const audi = new Auto('Audi', '2021');
audi.detalle();


const ford = new Auto('Ford', '2020');
ford.detalle();