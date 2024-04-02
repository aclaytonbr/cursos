"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const movimento_1 = require("./movimento");
class Conta {
    constructor(agencia, numero, cliente) {
        this._agencia = agencia;
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = 0;
        this._movimentos = [];
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    get movimentos() {
        return this._movimentos;
    }
    get agencia() {
        return this._agencia;
    }
    realizarDeposito(valor) {
        this._saldo += valor;
        this._movimentos.push(new movimento_1.Movimento((this._movimentos.length + 1).toString(), this, "DEPOSITO", "E", new Date(), valor));
    }
    realizarSaque(valor) {
        this._saldo += -valor;
        this._movimentos.push(new movimento_1.Movimento((this._movimentos.length + 1).toString(), this, "SAQUE", "S", new Date(), -valor));
    }
    mostrarExtrato() {
        for (let m in this._movimentos) {
            console.log(this._movimentos[m].numero + " - " + this._movimentos[m].tipo + " [" + this._movimentos[m].timestamp.toLocaleString('pt-BR') + "] " + this._movimentos[m].valor);
        }
    }
}
exports.Conta = Conta;
//# sourceMappingURL=conta.js.map