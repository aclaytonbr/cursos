"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empregado = void 0;
const pessoa_1 = require("./pessoa");
class Empregado extends pessoa_1.Pessoa {
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
exports.Empregado = Empregado;
//# sourceMappingURL=empregado.js.map