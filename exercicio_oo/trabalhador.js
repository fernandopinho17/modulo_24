function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + "diz olá");
    }
    
}

function Trabalhador(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

const trabalhador1 = new Trabalhador("Andre", "eng software", 8000);
trabalhador1.dizOi();
trabalhador1.dizCargo();