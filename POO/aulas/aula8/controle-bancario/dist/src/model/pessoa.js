"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, dataNascimento) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map