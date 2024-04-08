"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const correntista_service_1 = require("../service/correntista-service");
class ClienteController {
    constructor() {
        this.clienteService = new correntista_service_1.CorrentistaService();
    }
    listarTodos(req, res) {
        try {
        }
        catch (error) {
            throw new Error("Erro ao tentar listar clientes [" + error.message + "]");
        }
    }
    buscarPorCodigo(req, res) {
        try {
        }
        catch (error) {
            throw new Error("Erro ao tentar buscar um cliente [" + error.message + "]");
        }
    }
    criarCliente(req, res) {
        try {
        }
        catch (error) {
            throw new Error("Erro ao tentar cadastrar um cliente [" + error.message + "]");
        }
        ;
    }
    atualizarCliente(req, res) {
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=correntista-controller.js.map