import { Agencia } from "./agencia";
import { Cliente } from "./cliente";
import { Movimento } from "./movimento";

export class Conta {
    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente;
    private _movimentos: Movimento[];
    private _agencia: Agencia;

    constructor(agencia: Agencia, numero: string, cliente: Cliente) {
        this._agencia = agencia;
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = 0;
        this._movimentos = [];
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get movimentos(): Movimento[] {
        return this._movimentos;
    }

    get agencia(): Agencia {
        return this._agencia;
    }

    public realizarDeposito(valor: number) {
        this._saldo += valor;
        this._movimentos.push(new Movimento((this._movimentos.length + 1).toString(), this, "DEPOSITO", "E", new Date(), valor))
    }

    public realizarSaque(valor: number) {
        this._saldo += -valor;
        this._movimentos.push(new Movimento((this._movimentos.length + 1).toString(),this,"SAQUE", "S", new Date(), -valor))
    }

    public mostrarExtrato(): void {
        for (let m in this._movimentos) {
            console.log(this._movimentos[m].numero + " - " + this._movimentos[m].tipo + " [" + this._movimentos[m].timestamp.toLocaleString('pt-BR') + "] " + this._movimentos[m].valor);
        }
    }

}