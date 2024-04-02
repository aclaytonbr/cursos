import { Agencia } from "./agencia";
import { Banco } from "./banco";

export class CaixaEletronico {
    private _numero: string;
    private _endereco: string;
    private _bancos: Banco[];

    constructor(numero: string, endereco: string) {
        this._numero = numero;
        this._endereco = endereco;
        this._bancos = [];
    }

    get numero(): string {
        return this._numero;
    }

    get endereco(): string {
        return this._endereco;
    }

    get bancos(): Banco[] {
        return this._bancos;
    }

    public realizarSaque(numero_banco: string, numero_agencia: string, numero_conta: string, valor: number): void {
        let banco = <Banco> this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.realizarSaque(numero_agencia, numero_conta, valor);
        } else {
            console.log("Banco não encontrado !!!");
        }
    }

    public realizarDeposito(numero_banco: string, numero_agencia: string, numero_conta: string, valor: number): void {
        let banco = <Banco> this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.realizarDeposito(numero_agencia, numero_conta, valor);
        } else {
            console.log("Banco não encontrado !!!");
        }
    }

    public solicitarSaldo(numero_banco: string, numero_agencia: string, numero_conta: string): void {
        let banco = <Banco> this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.solicitarSaldo(numero_agencia, numero_conta);
        } else {
            console.log("Banco não encontrado !!!");
        }
    }

    public solicitarExtrato(numero_banco: string, numero_agencia: string, numero_conta: string): void {
        let banco = <Banco> this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.solicitarExtrato(numero_agencia, numero_conta);
        } else {
            console.log("Banco não encontrado !!!");
        }
    }
    
}