"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mock_banco_1 = require("../../database/mock-banco");
const bancoRouter = express_1.default.Router();
bancoRouter.get('/', (req, res) => {
});
bancoRouter.get('/buscar', (req, res) => {
    res.json(mock_banco_1.bancos[0]);
});
bancoRouter.post('/criar', (req, res) => {
    res.send(req.body);
});
bancoRouter.put('/atualizar', (req, res) => {
});
bancoRouter.delete('/excluir', (req, res) => {
});
exports.default = bancoRouter;
//# sourceMappingURL=banco-router.js.map