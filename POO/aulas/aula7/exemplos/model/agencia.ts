import { Conta } from "./conta";

export class Agencia {
    private _codigo: string;
    private _contas: Conta[];

    constructor(codigo: string) {
        this._codigo = codigo;
        this._contas = [];
    }

    get codigo():string {
        return this._codigo;
    }

    get contas(): Conta[] {
        return this._contas;
    }

    public abrirConta(cpf: string) {
        let data = new Date();
        let novaConta = new Conta(Math.floor(Math.random() * (999 - 100 + 1)) + 100 + "XXXXX", cpf);
        this._contas.push(novaConta);
    }

    public listarContas():void {
        for (let c in this._contas) {
            console.log("Conta: " + this._contas[c].numero + " Saldo: " + this._contas[c].mostrarSaldo());
        }
    }

}