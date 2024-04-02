"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agencia = void 0;
const conta_1 = require("./conta");
class Agencia {
    constructor(banco, codigo, nome, endereco) {
        this._codigo = codigo;
        this._nome = nome;
        this._endereco = endereco;
        this._contas = [];
        this._banco = banco;
    }
    get codigo() {
        return this._codigo;
    }
    get nome() {
        return this._nome;
    }
    get endereco() {
        return this._endereco;
    }
    get contas() {
        return this._contas;
    }
    get banco() {
        return this._banco;
    }
    abrirConta(cliente) {
        try {
            this._contas.push(new conta_1.Conta(this, (this._contas.length + 1).toString(), cliente));
        }
        catch (error) {
            console.error("Ocorreu um erro ao tentar abrir a conta");
        }
    }
    realizarDeposito(numero_conta, valor) {
        let conta = this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.realizarDeposito(valor);
        }
        else {
            console.log('Conta não encontrada !!!');
        }
    }
    realizarSaque(numero_conta, valor) {
        let conta = this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.realizarSaque(valor);
        }
        else {
            console.log('Conta não encontrada !!!');
        }
    }
    solicitarSaldo(numero_conta) {
        let conta = this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            console.log(conta.saldo);
        }
        else {
            console.log('Conta não encontrada !!!');
        }
    }
    solicitarExtrato(numero_conta) {
        let conta = this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.mostrarExtrato();
        }
        else {
            console.log('Conta não encontrada !!!');
        }
    }
}
exports.Agencia = Agencia;
//# sourceMappingURL=agencia.js.map