import { Agencia } from "./agencia";
import { CaixaEletronico } from "./caixa_eletronico";
import { DataBase } from "../database/database";
import { IBanco } from "../interface/banco-interface";

export class Banco {
    private _codigo: string;
    private _nome: string;
    private _agencias: Agencia[];
    private _caixas_eletronicos: CaixaEletronico[];

    constructor() {
        this._codigo = '';
        this._nome = '';
        this._agencias = [];
        this._caixas_eletronicos = [];
    }

    get codigo(): string {
        return this._codigo;
    }

    set codigo(codigo: string) {
        this._codigo = codigo;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get agencias(): Agencia[] {
        return this._agencias;
    }

    get caixasEletronicos(): CaixaEletronico[] {
        return this._caixas_eletronicos;
    }

    public listar(): Banco[] {
        return DataBase.bancos;
    }

    public buscarPorCodigo(codigo: string): Banco {
        return <Banco> DataBase.bancos.find(banco => banco.codigo === codigo);
    }

    public incluir(codigo: string, nome: string): Banco {
        const novoBanco = new Banco();
        novoBanco._codigo = codigo;
        novoBanco._nome = nome;
        DataBase.bancos.push(novoBanco);
        return novoBanco;
    }

    public atualizar(codigo: string, banco: IBanco): boolean {
        let cur_banco = <Banco> DataBase.bancos.find(banco => banco.codigo === codigo);
        if (cur_banco) {
            cur_banco._nome = banco.nome;
            return true;
        } else {
            return false
        }
    }

    public excluir(codigo: string): boolean {
        let posicao: number = DataBase.bancos.findIndex(banco => banco.codigo === codigo);
        if (posicao >= 0) {
            DataBase.bancos.splice(posicao, 1);
            return true;
        } else {
            return false;
        }
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