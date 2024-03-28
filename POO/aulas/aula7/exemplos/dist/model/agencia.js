"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agencia = void 0;
const conta_1 = require("./conta");
class Agencia {
    constructor(codigo) {
        this._codigo = codigo;
        this._contas = [];
    }
    get codigo() {
        return this._codigo;
    }
    get contas() {
        return this._contas;
    }
    abrirConta(cpf) {
        let data = new Date();
        let novaConta = new conta_1.Conta(Math.floor(Math.random() * (999 - 100 + 1)) + 100 + "XXXXX", cpf);
        this._contas.push(novaConta);
    }
    listarContas() {
        for (let c in this._contas) {
            console.log("Conta: " + this._contas[c].numero + " Saldo: " + this._contas[c].mostrarSaldo());
        }
    }
}
exports.Agencia = Agencia;
//# sourceMappingURL=agencia.js.map