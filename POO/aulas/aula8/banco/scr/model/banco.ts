import { Agencia } from "./agencia";
import { CaixaEletronico } from "./caixa_eletronico";

export class Banco {
    private _codigo: string;
    private _nome: string;
    private _agencias: Agencia[];
    private _caixas_eletronicos: CaixaEletronico[];

    constructor(codigo: string, nome: string) {
        this._codigo = codigo;
        this._nome = nome;
        this._agencias = [];
        this._caixas_eletronicos = [];
    }

    get codigo(): string {
        return this._codigo;
    }

    get nome(): string {
        return this._nome;
    }

    get agencias(): Agencia[] {
        return this._agencias;
    }

    get caixasEletronicos(): CaixaEletronico[] {
        return this._caixas_eletronicos;
    }

    public abrirAgencia(nome: string, endereco: string): Agencia {
        const agencia = new Agencia(this, (this._agencias.length + 1).toString(), nome, endereco)
        this._agencias.push(agencia);
        return agencia;
    }

    public listarAgencias(): void {
        for (let a in this._agencias) {
            console.log(this._agencias[a].codigo + " - " + this._agencias[a].nome);
        }
    }

    credenciarCaixaEletronico(caixa: CaixaEletronico): void {
        this._caixas_eletronicos.push(caixa);
        caixa.bancos.push(this);
    }

    public realizarSaque(numero_agencia: string, numero_conta: string, valor: number): void {
        let agencia = <Agencia> this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.realizarSaque(numero_conta, valor);
        } else {
            console.log("Agência não cadastrada !!!");
        }       
    }

    public realizarDeposito(numero_agencia: string, numero_conta: string, valor: number): void {
        let agencia = <Agencia> this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.realizarDeposito(numero_conta, valor);
        } else {
            console.log("Agência não cadastrada !!!");
        }
    }

    public solicitarSaldo(numero_agencia: string, numero_conta: string): void {
        let agencia = <Agencia> this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.solicitarSaldo(numero_conta);
        } else {
            console.log("Agência não cadastrada !!!");
        }
    }

    public solicitarExtrato(numero_agencia: string, numero_conta: string):void  {
        let agencia = <Agencia> this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.solicitarExtrato(numero_conta);
        } else {
            console.log("Agência não cadastrada !!!");
        }
    }

}