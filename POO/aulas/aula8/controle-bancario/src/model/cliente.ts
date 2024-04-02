import { Conta } from "./conta";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa {
    private _cpf: string;
    private _estadoCivil: string;
    private _contas: Conta[];

    constructor(nome: string, dataNascimento: string, cpf:string, estadoCivil: string) {
        super(nome, dataNascimento);
        this._cpf = cpf;
        this._estadoCivil = estadoCivil;
        this._contas = [];
    }

    get nome(): string {
        return this.nome
    }

    get dataNascimento(): string {
        return this.dataNascimento;
    }

    get cpf(): string {
        return this._cpf;
    }

    get estadoCivil(): string {
        return this._estadoCivil;
    }

    get contas(): Conta[] {
        return this._contas;
    }

}