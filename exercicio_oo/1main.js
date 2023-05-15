const carroDoAndre = {
    modelo: 'x7',
    fabricante: 'BMW',
    anoModelo: 2019,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vruum")
    }
}

const carroDoPaulo = {
    modelo: 'gls',
    fabricante: 'Mercedes',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

const carroDoRicardo = {
    modelo: 'LX570',
    fabricante: 'lexus',
    anoModelo: 2019,
    anoFabricacao: 2018,
    acelerar: function() {
        console.log("vrum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoAndre2 = new Carro("x7", "BMW", 2020, 2019);
const carroDoPaulo2 = new Carro("gls", "Mercedes", 2021, 2020);
const carroDoRicardo2 = new Carro("lx570", "lexus", 2019, 2018);

console.log(carroDoAndre);
console.log(carroDoPaulo);
console.log(carroDoRicardo);

const nome = "Miguel"
const idade = 60
const ehIdoso = true
const habilidades = ["fluente na língua inglesa", "rapido em achar soluções",]

const pessoa =  {
    nome: nome,
    idade: idade,
    ehIdoso: ehIdoso,
    habilidades: habilidades,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehIdoso);
console.log(typeof habilidades);
console.log(typeof pessoa);

console.log(carroDoAndre2 instanceof Carro)
console.log(idade instanceof Carro)
console.log(ehIdoso instanceof Carro)

console.log(carroDoPaulo2 instanceof Carro)
console.log(habilidades instanceof Carro)
console.log(ehIdoso instanceof Carro)

console.log(carroDoRicardo2 instanceof Carro)
console.log(nome instanceof Carro)
console.log(ehIdoso instanceof Carro)




