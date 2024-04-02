export class Pessoa {
    private _nome: string;
    private _dataNascimento: string;

    constructor(nome: string, dataNascimento: string) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string {
        return this._nome;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }
}