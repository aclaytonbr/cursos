export class Pessoa {
    protected _codigo: string;
    protected _nome: string;
    protected _dataNascimento: string;

    constructor() {
        this._codigo = '';
        this._nome = '';
        this._dataNascimento = '';
    }

    //getters
    get codigo(): string {
        return this._codigo;
    }
    get nome(): string {
        return this._nome;
    }
    get dataNascimento(): string {
        return this._dataNascimento;
    }

    //setters
    set codigo(codigo: string) {
        this._codigo = codigo;
    }
    set nome(nome: string) {
        this._nome = nome;
    }
    set dataNascimento(data_aniversario: string) {
        this._dataNascimento = data_aniversario;
    }
    
}