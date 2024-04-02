"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const database_1 = require("../database/database");
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor() {
        super();
        this.codigo = '';
        this.nome = '';
        this.dataNascimento = '';
        this._cpf = '';
        this._estadoCivil = '';
        this._contas = [];
    }
    //getters
    get cpf() {
        return this._cpf;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }
    get contas() {
        return this._contas;
    }
    //setters
    set cpf(cpf) {
        this._cpf = cpf;
    }
    set estadoCivil(estadoCivil) {
        this._estadoCivil = estadoCivil;
    }
    incluir(cliente) {
        const novoCliente = new Cliente();
        novoCliente.codigo = cliente.codigo;
        novoCliente.nome = cliente.nome;
        novoCliente.dataNascimento = cliente.dataNascimento;
        novoCliente.cpf = cliente.cpf;
        novoCliente.estadoCivil = cliente.estadoCivil;
        database_1.DataBase.clientes.push(novoCliente);
        return novoCliente;
    }
    listar() {
        return database_1.DataBase.clientes;
    }
    buscarPorCodigo(codigo) {
        return database_1.DataBase.clientes.find(cliente => cliente.codigo === codigo);
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map