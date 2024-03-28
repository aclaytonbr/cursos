"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const movimento_1 = require("./movimento");
class Conta {
    constructor(numero, cpf) {
        this._numero = numero;
        this._cpf = cpf;
        this._movimentos = [];
    }
    get numero() {
        return this._numero;
    }
    get cpf() {
        return this._cpf;
    }
    depositar(valor) {
        if (valor < 0) {
            valor = -1 * valor;
        }
        let m = new movimento_1.Movimento(valor);
        this._movimentos.push(m);
    }
    sacar(valor) {
        if (valor > 0) {
            valor = -1 * valor;
        }
        let m = new movimento_1.Movimento(valor);
        this._movimentos.push(m);
    }
    mostrarSaldo() {
        var saldo = 0;
        for (let m in this._movimentos) {
            saldo += this._movimentos[m].valor;
        }
        return saldo;
    }
    mostrarExtrato() {
        for (let m in this._movimentos) {
            if (m != undefined)
                console.log(Intl.DateTimeFormat().format(this._movimentos[m].data) + " " + this._movimentos[m].valor);
        }
    }
}
exports.Conta = Conta;
//# sourceMappingURL=conta.js.map