import { DataBase } from "../database/database";
import { ICliente } from "../interface/cliente-interface";
import { Conta } from "./conta";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa {
    private _cpf: string;
    private _estadoCivil: string;
    private _contas: Conta[];

    constructor() {
        super();
        this.codigo = '';
        this.nome = '';
        this.dataNascimento = '';
        this._cpf = '';
        this._estadoCivil = '';
        this._contas = [];
    }

    //getters
    get cpf(): string {
        return this._cpf;
    }
    get estadoCivil(): string {
        return this._estadoCivil;
    }
    get contas(): Conta[] {
        return this._contas;
    }

    //setters
    set cpf(cpf: string) {
        this._cpf = cpf;
    }
    set estadoCivil(estadoCivil: string) {
        this._estadoCivil = estadoCivil;
    }

    public incluir(cliente: ICliente): Cliente {
        const novoCliente = new Cliente();
        novoCliente.codigo = cliente.codigo;
        novoCliente.nome = cliente.nome;
        novoCliente.dataNascimento = cliente.dataNascimento;
        novoCliente.cpf = cliente.cpf;
        novoCliente.estadoCivil = cliente.estadoCivil;
        DataBase.clientes.push(novoCliente);
        return novoCliente;
    }

    public listar(): Cliente[] {
        return DataBase.clientes;
    }

    public buscarPorCodigo(codigo: string): Cliente {
        return <Cliente> DataBase.clientes.find(cliente => cliente.codigo === codigo);
    }

    public atualizar(codigo: string, cliente:ICliente): boolean {
        let index_cliente = <Cliente> DataBase.clientes.find(cliente => cliente.codigo === codigo);
        if (index_cliente) {
            index_cliente.codigo = cliente.codigo;
            index_cliente.nome = cliente.nome;
            index_cliente.dataNascimento = cliente.dataNascimento;
            index_cliente.cpf = cliente.cpf;
            index_cliente.estadoCivil = cliente.estadoCivil;
            return true;
        } else {
            return false
        }
    }

}