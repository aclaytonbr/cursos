import { Banco } from "./model/banco";

let banco: Banco = new Banco("001","MeuBanco S/A");


//Cria a conta
banco.abrirConta(0, "11111111"); 
banco.abrirConta(0, "22222222");
banco.abrirConta(0, "333333333");

//Movimenta a conta
banco.depositar(0,0,1500);
banco.depositar(0,1,10000);

banco.sacar(0,0,1000);
banco.sacar(0,0,200);
banco.transferir(0,1,0,0,1000);

let saldo = banco.mostrarSaldo(0,0);

console.log(" Saldo conta " + banco.agencias[0].contas[0].numero + " é " + saldo);