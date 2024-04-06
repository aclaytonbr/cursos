"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaixaEletronico = void 0;
class CaixaEletronico {
    constructor(numero, endereco) {
        this._numero = numero;
        this._endereco = endereco;
        this._bancos = [];
    }
    get numero() {
        return this._numero;
    }
    get endereco() {
        return this._endereco;
    }
    get bancos() {
        return this._bancos;
    }
    realizarSaque(numero_banco, numero_agencia, numero_conta, valor) {
        let banco = this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.realizarSaque(numero_agencia, numero_conta, valor);
        }
        else {
            console.log("Banco não encontrado !!!");
        }
    }
    realizarDeposito(numero_banco, numero_agencia, numero_conta, valor) {
        let banco = this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.realizarDeposito(numero_agencia, numero_conta, valor);
        }
        else {
            console.log("Banco não encontrado !!!");
        }
    }
    solicitarSaldo(numero_banco, numero_agencia, numero_conta) {
        let banco = this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.solicitarSaldo(numero_agencia, numero_conta);
        }
        else {
            console.log("Banco não encontrado !!!");
        }
    }
    solicitarExtrato(numero_banco, numero_agencia, numero_conta) {
        let banco = this._bancos.find(banco => banco.codigo === numero_banco);
        if (banco) {
            banco.solicitarExtrato(numero_agencia, numero_conta);
        }
        else {
            console.log("Banco não encontrado !!!");
        }
    }
}
exports.CaixaEletronico = CaixaEletronico;
//# sourceMappingURL=caixa_eletronico.js.map