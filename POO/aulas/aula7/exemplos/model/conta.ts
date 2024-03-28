import { Movimento } from "./movimento";

export class Conta {
    protected _numero: string;
    protected _cpf: string;
    protected _movimentos: Movimento[];

    constructor(numero: string, cpf: string) {
        this._numero = numero;
        this._cpf = cpf;
        this._movimentos = [];
    }

    get numero(): string {
        return this._numero;
    }

    get cpf(): string {
        return this._cpf;
    }

    public depositar(valor: number): void {
        if (valor < 0) {
            valor = -1 * valor;
        }
        let m = new Movimento(valor);
        this._movimentos.push(m);
    }

    public sacar(valor: number): void {
        if (valor > 0) {
            valor = -1 * valor;
        }
        let m = new Movimento(valor);
        this._movimentos.push(m); 
    }

    public mostrarSaldo(): number {
        var saldo = 0;
        for (let m in this._movimentos) {
            saldo += this._movimentos[m].valor;
        }
        return saldo;
    }

    public mostrarExtrato(): void {
        for (let m in this._movimentos) {
            if (m != undefined)
                console.log(Intl.DateTimeFormat().format(this._movimentos[m].data) + " " + this._movimentos[m].valor);
        }
    }

}