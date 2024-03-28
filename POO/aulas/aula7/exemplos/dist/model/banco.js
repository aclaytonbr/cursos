"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const agencia_1 = require("./agencia");
class Banco {
    constructor(codigo, nome) {
        this._agencias = [];
        this._codigo = codigo;
        this._nome = nome;
        this._agencias.push(new agencia_1.Agencia("01"));
    }
    get codigo() {
        return this._codigo;
    }
    get nome() {
        return this._nome;
    }
    get agencias() {
        return this._agencias;
    }
    abrirConta(codigo_agencia, cpf) {
        this._agencias[0].abrirConta(cpf);
    }
    depositar(codigo_agencia, codigo_conta, valor) {
        this._agencias[codigo_agencia].contas[codigo_conta].depositar(valor);
    }
    sacar(codigo_agencia, codigo_conta, valor) {
        this._agencias[codigo_agencia].contas[codigo_conta].sacar(valor);
    }
    transferir(agencia_origem, contaOrigem, agencia_destino, contaDestino, valor) {
        this._agencias[agencia_origem].contas[contaOrigem].sacar(valor);
        this._agencias[agencia_destino].contas[contaDestino].depositar(valor);
    }
    //relatorios
    mostrarSaldo(codigo_agencia, codigo_conta) {
        return this._agencias[codigo_agencia].contas[codigo_conta].mostrarSaldo();
    }
    listarAgencias() {
        for (let a in this._agencias) {
            console.log(this._agencias[a].codigo);
        }
    }
    listarContas(codigo_agencia) {
        this._agencias[codigo_agencia].listarContas();
    }
}
exports.Banco = Banco;
//# sourceMappingURL=banco.js.map