"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoController = void 0;
const banco_1 = require("../model/banco");
class BancoController {
    constructor() {
        this.bancoModel = new banco_1.Banco();
    }
    listarTodos(req, res) {
        const bancos = this.bancoModel.listar();
        if (!bancos) {
            res.status(404).json({ message: 'Não há bancos cadastrados' });
        }
        else {
            res.json(bancos);
        }
    }
    buscarPorCodigo(req, res) {
        const { codigo } = req.params;
        const banco = this.bancoModel.buscarPorCodigo(codigo);
        if (banco) {
            res.json(banco);
        }
        else {
            res.status(404).json({ message: 'Banco não encontrado' });
        }
    }
    criarBanco(req, res) {
        const novoBanco = req.body;
        this.bancoModel.incluir(novoBanco.codigo, novoBanco.nome);
        res.status(201).json({ message: 'Banco criado com sucesso' });
    }
    atualizarBanco(req, res) {
        const codigo = req.query.id;
        const banco = req.body;
        if (this.bancoModel.atualizar(codigo, banco)) {
            res.json({ message: 'Banco atualizado com sucesso' });
        }
        else {
            res.json({ message: 'Erro ao tentar atualizar o banco' });
        }
    }
    delete(req, res) {
        const { codigo } = req.params;
        if (this.bancoModel.excluir(codigo)) {
            res.json({ message: 'Banco excluído com sucesso' });
        }
        else {
            res.json({ message: 'Erro ao tentar excluir o banco' });
        }
    }
}
exports.BancoController = BancoController;
//# sourceMappingURL=banco-controller.js.map