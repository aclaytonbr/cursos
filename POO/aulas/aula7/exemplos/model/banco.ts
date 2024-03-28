import { Agencia } from "./agencia";

export class Banco {
    private _codigo: string;
    private _nome: string;
    private _agencias: Agencia[] = [];

    constructor(codigo: string, nome: string) {
        this._codigo = codigo;
        this._nome = nome;
        this._agencias.push(new Agencia("01"));
    }

    get codigo():string {
        return this._codigo;
    }

    get nome():string {
        return this._nome;
    }

    get agencias(): Agencia[] {
        return this._agencias;
    }

    public abrirConta(codigo_agencia:number, cpf: string): void {
        this._agencias[0].abrirConta(cpf);
    }

    public depositar(codigo_agencia: number, codigo_conta: number, valor: number): void {
        this._agencias[codigo_agencia].contas[codigo_conta].depositar(valor);
    }

    public sacar(codigo_agencia: number, codigo_conta: number, valor: number): void {
        this._agencias[codigo_agencia].contas[codigo_conta].sacar(valor);
    }

    public transferir(agencia_origem: number, contaOrigem: number, agencia_destino: number, contaDestino: number, valor: number) {
        this._agencias[agencia_origem].contas[contaOrigem].sacar(valor);
        this._agencias[agencia_destino].contas[contaDestino].depositar(valor);
    }

    //relatorios
    public mostrarSaldo(codigo_agencia: number, codigo_conta: number): number {
        return this._agencias[codigo_agencia].contas[codigo_conta].mostrarSaldo();
    }

    public listarAgencias(): void {
        for (let a in this._agencias) {
            console.log(this._agencias[a].codigo);
        }
    }

    public listarContas(codigo_agencia: number): void {
        this._agencias[codigo_agencia].listarContas();
    }

}

