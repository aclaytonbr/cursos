"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const banco_controller_1 = require("../controller/banco-controller");
const bancoRouter = express_1.default.Router();
const bancoController = new banco_controller_1.BancoController();
bancoRouter.get('/', (req, res) => {
    bancoController.listarTodos(req, res);
});
bancoRouter.post('/criar/', (req, res) => {
    bancoController.criarBanco(req, res);
});
bancoRouter.put('/atualizar/', (req, res) => {
    bancoController.atualizarBanco(req, res);
});
bancoRouter.delete('/excluir/', (req, res) => {
    bancoController.excluirBanco(req, res);
});
exports.default = bancoRouter;
//# sourceMappingURL=banco-router.js.map