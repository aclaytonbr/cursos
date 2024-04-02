"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(nome, dataNascimento, cpf, estadoCivil) {
        super(nome, dataNascimento);
        this._cpf = cpf;
        this._estadoCivil = estadoCivil;
        this._contas = [];
    }
    get nome() {
        return this.nome;
    }
    get dataNascimento() {
        return this.dataNascimento;
    }
    get cpf() {
        return this._cpf;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }
    get contas() {
        return this._contas;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map