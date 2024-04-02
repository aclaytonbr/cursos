import { Conta } from "./conta";

export class Movimento {
    private _numero: string;
    private _tipo: string;
    private _natureza: string;
    private _timestamp: Date;
    private _valor: number;
    private _conta: Conta;

    constructor(numero: string, conta: Conta, tipo: string, natureza: string,timestamp: Date, valor: number ) {
        this._numero = numero;
        this._conta = conta;
        this._tipo = tipo;
        this._natureza = natureza;
        this._timestamp = timestamp;
        this._valor = valor;
    }

    get numero(): string {
        return this._numero;
    }

    get tipo(): string {
        return this._tipo;
    }

    get natureza(): string {
        return this._natureza;
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    get valor(): number {
        return this._valor;
    }

    get conta(): Conta {
        return this._conta;
    }

}