const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2019,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
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

const carroDoJoao2 = new Carro("fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("ka", "ford", 2021, 2020);

console.log(carroDaMaria);
console.log(carroDaMaria);

const nome = "fernando"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMariorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa['sobrenome'] = undefined;

Object.freeze(pessoa);

pessoa.nome = 'pinho';

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenomes")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log( Object.keys(pessoa).length);
console.log( Object.values(pessoa));   