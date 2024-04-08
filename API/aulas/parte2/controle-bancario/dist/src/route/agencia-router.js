"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agencia_controller_1 = require("../controller/agencia-controller");
const agenciaRouter = express_1.default.Router();
const agenciaController = new agencia_controller_1.AgenciaController();
agenciaRouter.post('/criar/', (req, res) => {
    agenciaController.criar(req, res);
});
agenciaRouter.get('/', (req, res) => {
    agenciaController.listar(req, res);
});
agenciaRouter.put('/atualizar/', (req, res) => {
    agenciaController.atualizar(req, res);
});
agenciaRouter.delete('/excluir/', (req, res) => {
    agenciaController.excluir(req, res);
});
exports.default = agenciaRouter;
//# sourceMappingURL=agencia-router.js.map