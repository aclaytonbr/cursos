"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_controller_1 = require("../controller/cliente-controller");
const clienteRouter = express_1.default.Router();
const clienteController = new cliente_controller_1.ClienteController();
clienteRouter.get('/', (req, res) => {
    clienteController.listarTodos(req, res);
});
clienteRouter.post('/criar/', (req, res) => {
    clienteController.criarCliente(req, res);
});
// clienteRouter.put('/atualizar/',(req, res) => {
//     clienteController.atualizarCliente(req, res);
// })
exports.default = clienteRouter;
//# sourceMappingURL=cliente-router.js.map