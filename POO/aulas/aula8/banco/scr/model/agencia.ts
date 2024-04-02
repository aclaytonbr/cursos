import { Banco } from "./banco";
import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class Agencia {
    private _codigo: string;
    private _nome: string;
    private _endereco: string;
    private _contas: Conta[];
    private _banco: Banco;

    constructor(banco: Banco, codigo: string, nome: string, endereco: string) {
        this._codigo = codigo;
        this._nome = nome;
        this._endereco = endereco;
        this._contas = [];
        this._banco = banco;
    }

    get codigo(): string {
        return this._codigo;
    }

    get nome(): string {
        return this._nome;
    }

    get endereco(): string {
        return this._endereco;
    }

    get contas(): Conta[] {
        return this._contas;
    }

    get banco(): Banco {
        return this._banco;
    }

    public abrirConta(cliente: Cliente): void {
        try {
            this._contas.push(new Conta(this, (this._contas.length + 1).toString(), cliente));
        } catch (error) {
            console.error("Ocorreu um erro ao tentar abrir a conta");
        }
    }

    public realizarDeposito(numero_conta: string, valor: number):void  {
        let conta = <Conta> this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.realizarDeposito(valor);
        } else {
            console.log('Conta não encontrada !!!');
        }
    }

    public realizarSaque(numero_conta: string, valor: number):void  {
        let conta = <Conta> this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.realizarSaque(valor);
        } else {
            console.log('Conta não encontrada !!!');
        }
    }

    public solicitarSaldo(numero_conta: string): void {
        let conta = <Conta> this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            console.log(conta.saldo);
        } else {
            console.log('Conta não encontrada !!!');
        }
    }

    public solicitarExtrato(numero_conta: string): void {
        let conta = <Conta> this._contas.find(conta => conta.numero === numero_conta);
        if (conta) {
            conta.mostrarExtrato();
        } else {
            console.log('Conta não encontrada !!!');
        }
    }

}