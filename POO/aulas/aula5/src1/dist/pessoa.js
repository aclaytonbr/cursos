"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
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
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map