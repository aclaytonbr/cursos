"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor() {
        this._codigo = '';
        this._nome = '';
        this._dataNascimento = '';
    }
    //getters
    get codigo() {
        return this._codigo;
    }
    get nome() {
        return this._nome;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    //setters
    set codigo(codigo) {
        this._codigo = codigo;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set dataNascimento(data_aniversario) {
        this._dataNascimento = data_aniversario;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map