"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const agencia_1 = require("./agencia");
const database_1 = require("../database/database");
class Banco {
    constructor() {
        this._codigo = '';
        this._nome = '';
        this._agencias = [];
        this._caixas_eletronicos = [];
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get agencias() {
        return this._agencias;
    }
    get caixasEletronicos() {
        return this._caixas_eletronicos;
    }
    listar() {
        return database_1.DataBase.bancos;
    }
    buscarPorCodigo(codigo) {
        return database_1.DataBase.bancos.find(banco => banco.codigo === codigo);
    }
    incluir(codigo, nome) {
        const novoBanco = new Banco();
        novoBanco._codigo = codigo;
        novoBanco._nome = nome;
        database_1.DataBase.bancos.push(novoBanco);
        return novoBanco;
    }
    atualizar(codigo, banco) {
        let cur_banco = database_1.DataBase.bancos.find(banco => banco.codigo === codigo);
        if (cur_banco) {
            cur_banco._nome = banco.nome;
            return true;
        }
        else {
            return false;
        }
    }
    excluir(codigo) {
        let posicao = database_1.DataBase.bancos.findIndex(banco => banco.codigo === codigo);
        if (posicao >= 0) {
            database_1.DataBase.bancos.splice(posicao, 1);
            return true;
        }
        else {
            return false;
        }
    }
    abrirAgencia(nome, endereco) {
        const agencia = new agencia_1.Agencia(this, (this._agencias.length + 1).toString(), nome, endereco);
        this._agencias.push(agencia);
        return agencia;
    }
    listarAgencias() {
        for (let a in this._agencias) {
            console.log(this._agencias[a].codigo + " - " + this._agencias[a].nome);
        }
    }
    credenciarCaixaEletronico(caixa) {
        this._caixas_eletronicos.push(caixa);
        caixa.bancos.push(this);
    }
    realizarSaque(numero_agencia, numero_conta, valor) {
        let agencia = this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.realizarSaque(numero_conta, valor);
        }
        else {
            console.log("Agência não cadastrada !!!");
        }
    }
    realizarDeposito(numero_agencia, numero_conta, valor) {
        let agencia = this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.realizarDeposito(numero_conta, valor);
        }
        else {
            console.log("Agência não cadastrada !!!");
        }
    }
    solicitarSaldo(numero_agencia, numero_conta) {
        let agencia = this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.solicitarSaldo(numero_conta);
        }
        else {
            console.log("Agência não cadastrada !!!");
        }
    }
    solicitarExtrato(numero_agencia, numero_conta) {
        let agencia = this._agencias.find(agencia => agencia.codigo === numero_agencia);
        if (agencia) {
            agencia.solicitarExtrato(numero_conta);
        }
        else {
            console.log("Agência não cadastrada !!!");
        }
    }
}
exports.Banco = Banco;
//# sourceMappingURL=banco.js.map