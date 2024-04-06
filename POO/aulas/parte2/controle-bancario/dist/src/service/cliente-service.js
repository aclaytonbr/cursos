"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrentistaService = void 0;
const database_1 = require("../database/database");
class CorrentistaService {
    constructor() {
    }
    incluir(cliente) {
    }
    listar() {
    }
    buscarPorCodigo(cpf) {
    }
    atualizar(codigo, cliente) {
        let index_cliente = database_1.DataBase.clientes.find(cliente => cliente.codigo === codigo);
        if (index_cliente) {
            index_cliente.codigo = cliente.codigo;
            index_cliente.nome = cliente.nome;
            index_cliente.dataNascimento = cliente.dataNascimento;
            index_cliente.cpf = cliente.cpf;
            index_cliente.estadoCivil = cliente.estadoCivil;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CorrentistaService = CorrentistaService;
//# sourceMappingURL=cliente-service.js.map