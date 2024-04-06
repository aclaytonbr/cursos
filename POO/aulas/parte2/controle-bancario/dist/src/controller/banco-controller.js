"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoController = void 0;
const banco_service_1 = require("../service/banco-service");
class BancoController {
    constructor() {
        this.bancoService = new banco_service_1.BancoService();
    }
    criarBanco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoBanco = req.body;
                yield this.bancoService.incluir(novoBanco.codigo, novoBanco.nome);
                res.status(201).json({ message: 'Banco criado com sucesso' });
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar incluir um novo banco' });
            }
        });
    }
    listarTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bancos = yield this.bancoService.listar();
                if (!bancos) {
                    res.status(404).json({ message: 'Não há bancos cadastrados' });
                }
                else {
                    res.json(bancos);
                }
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar listar bancos' });
            }
        });
    }
    buscarBancoPorCodigo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo } = req.params;
                const banco = yield this.bancoService.buscarPorCodigo(codigo);
                if (banco) {
                    res.status(200).json(banco);
                }
                else {
                    res.status(404).json({ message: 'Banco não encontrado' });
                }
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar buscar banco' });
            }
        });
    }
    atualizarBanco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigo = req.query.id;
            const banco = req.body;
            try {
                yield this.bancoService.atualizar(codigo, banco);
                res.status(200).json({ message: 'Banco atualizado com sucesso' });
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar alterar banco' });
            }
        });
    }
    excluirBanco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { codigo } = req.params;
                yield this.bancoService.excluir(codigo);
                res.status(200).json({ message: 'Banco excluído com sucesso' });
            }
            catch (erro) {
                res.status(404).json({ message: 'Erro ao tentar alterar banco' });
            }
        });
    }
}
exports.BancoController = BancoController;
//# sourceMappingURL=banco-controller.js.map