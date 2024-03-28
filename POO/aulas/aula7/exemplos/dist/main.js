"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("./model/banco");
let banco = new banco_1.Banco("001", "MeuBanco S/A");
//Cria a conta
const minhaConta = banco.abrirConta(0, "11111111");
const tuaConta = banco.abrirConta(0, "22222222");
const nossaConta = banco.abrirConta(0, "333333333");
banco.listarContas(0);
//Movimenta a conta
banco.depositar(0, 0, 1500);
banco.depositar(0, 1, 10000);
banco.sacar(0, 0, 1000);
banco.sacar(0, 0, 200);
banco.transferir(0, 1, 0, 0, 1000);
let saldo = banco.mostrarSaldo(0, 0);
console.log(" Saldo conta " + banco.agencias[0].contas[0].numero + " é " + saldo);
//# sourceMappingURL=main.js.map