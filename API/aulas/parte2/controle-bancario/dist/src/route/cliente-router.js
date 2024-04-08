"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const correntista_controller_1 = require("../controller/correntista-controller");
const clienteRouter = express_1.default.Router();
const clienteController = new correntista_controller_1.ClienteController();
clienteRouter.get('/listar', (req, res) => {
    clienteController.listarTodos(req, res);
});
clienteRouter.post('/criar/', (req, res) => {
    clienteController.criarCliente(req, res);
});
clienteRouter.put('/atualizar/', (req, res) => {
    clienteController.atualizarCliente(req, res);
});
exports.default = clienteRouter;
//# sourceMappingURL=cliente-router.js.map