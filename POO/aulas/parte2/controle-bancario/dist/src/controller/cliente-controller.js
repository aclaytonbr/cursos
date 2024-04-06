"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_1 = require("../model/cliente");
class ClienteController {
    constructor() {
        this.clienteModel = new cliente_1.Cliente();
    }
    listarTodos(req, res) {
        const clientes = this.clienteModel.listar();
        if (!clientes) {
            res.status(404).json({ message: 'Não há clientes cadastrados' });
        }
        else {
            res.json(clientes);
        }
    }
    buscarPorCodigo(req, res) {
        const { codigo } = req.params;
        const cliente = this.clienteModel.buscarPorCodigo(codigo);
        if (cliente) {
            res.json(cliente);
        }
        else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    }
    criarCliente(req, res) {
        const novoCliente = req.body;
        this.clienteModel.incluir(novoCliente);
        res.status(201).json({ message: 'Cliente criado com sucesso' });
    }
}
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente-controller.js.map