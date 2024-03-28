"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, data_nasc, endereco) {
        this._nome = nome;
        this._data_nasc = data_nasc;
        this._endereco = endereco;
    }
    get nome() {
        return this._nome;
    }
    get dataNascimento() {
        return this._data_nasc;
    }
    get endereco() {
        return this._endereco;
    }
}
exports.Pessoa = Pessoa;
class Endereco {
    constructor(logradouro, numero, bairro, cidade, uf) {
        this._logradouro = logradouro;
        this._numero = numero;
        this._bairro = bairro;
        this._cidade = cidade;
        this._uf = uf;
    }
    get logradouro() {
        return this._logradouro;
    }
    get numero() {
        return this._numero;
    }
    get bairro() {
        return this._bairro;
    }
    get cidade() {
        return this._cidade;
    }
    get uf() {
        return this._uf;
    }
}
exports.Endereco = Endereco;
class Funcionario extends Pessoa {
    constructor(nome, data_nasc, endereco, cargo, salario) {
        super(nome, data_nasc, endereco);
        this._cargo = cargo;
        this._salario = salario;
    }
}
//# sourceMappingURL=pessoa.js.map