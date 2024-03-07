"use strict";
class Pessoa {
    constructor(_nome, _endereco, _contato) {
        this.nome = _nome;
        this.endereco = _endereco;
        this.contato = _contato;
    }
    mostrarDetalhes() {
        console.log("Nome: " + this.nome);
        console.log("Endereço: " + this.endereco);
        console.log("Contato: " + this.contato);
    }
}
var eEstado_Civil;
(function (eEstado_Civil) {
    eEstado_Civil[eEstado_Civil["Solteiro"] = 1] = "Solteiro";
    eEstado_Civil[eEstado_Civil["Casado"] = 2] = "Casado";
    eEstado_Civil[eEstado_Civil["Uniao_Estavel"] = 3] = "Uniao_Estavel";
})(eEstado_Civil || (eEstado_Civil = {}));
class Empregado extends Pessoa {
    constructor(_nome, _endereco, _contato, _cargo, _salario_bruto, _estado_civil) {
        super(_nome, _endereco, _contato);
        this.estado_civil = _estado_civil;
        this.cargo = _cargo;
        this.salario_bruto = _salario_bruto;
    }
    mostrarDetalhes() {
        console.log("---------------------------------------");
        console.log("Nome: " + this.nome);
        console.log("Endereço: " + this.endereco);
        console.log("Contato: " + this.contato);
        console.log("Cargo: " + this.cargo);
        console.log("Salário Bruto: " + this.salario_bruto);
        console.log("Estado Civil: " + this.estado_civil);
        console.log("---------------------------------------");
    }
}
function mostrarPessoa() {
    let empregado = new Empregado('Fulano', 'Rua sem fim', '99999999', 'montador', 3000, eEstado_Civil.Uniao_Estavel);
    empregado.mostrarDetalhes();
}
mostrarPessoa();
//# sourceMappingURL=main.js.map