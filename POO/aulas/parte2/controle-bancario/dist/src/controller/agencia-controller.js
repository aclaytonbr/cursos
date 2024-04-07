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
exports.AgenciaController = void 0;
const agencia_service_1 = require("../service/agencia-service");
class AgenciaController {
    constructor() {
        this.agenciaService = new agencia_service_1.AgenciaService();
    }
    criar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaAgencia = req.body;
                yield this.agenciaService.incluir(novaAgencia);
                res.status(201).json({ message: 'Agencia criada com sucesso' });
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar incluir um nova agencia' });
            }
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agencias = yield this.agenciaService.listar();
                if (!agencias) {
                    res.status(404).json({ message: 'Não há agencias cadastradas' });
                }
                else {
                    res.status(200).json(agencias);
                }
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar listar agencias' });
            }
        });
    }
    buscaragenciaPorCodigo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //retira os parâmetros da requisicao
                const { codigo } = req.params;
                const { idbanco } = req.params;
                //monta a interface de busca
                const ibusca_agencia = {
                    codigo: codigo,
                    id_banco: idbanco
                };
                //solicita a busca
                const agencia = yield this.agenciaService.buscarPorCodigo(ibusca_agencia);
                if (agencia) {
                    res.status(200).json(agencia);
                }
                else {
                    res.status(404).json({ message: 'Agencia não encontrado' });
                }
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar buscar agencia' });
            }
        });
    }
    atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //retira os parâmetros da requisicao
            const { codigo } = req.params;
            const { idbanco } = req.params;
            //monta a interface de busca
            const ibusca_agencia = {
                codigo: codigo,
                id_banco: idbanco
            };
            try {
                const iagencia = req.body;
                yield this.agenciaService.atualizar(ibusca_agencia, iagencia);
                res.status(200).json({ message: 'agencia atualizado com sucesso' });
            }
            catch (erro) {
                console.log(erro.message);
                res.status(404).json({ message: 'Erro ao tentar alterar agencia' });
            }
        });
    }
    excluir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //retira os parâmetros da requisicao
            const { codigo } = req.params;
            const { idbanco } = req.params;
            //monta a interface de busca
            const ibusca_agencia = {
                codigo: codigo,
                id_banco: idbanco
            };
            try {
                yield this.agenciaService.excluir(ibusca_agencia);
                res.status(200).json({ message: 'Agencia excluída com sucesso' });
            }
            catch (erro) {
                res.status(404).json({ message: 'Erro ao tentar excluir agencia' });
            }
        });
    }
}
exports.AgenciaController = AgenciaController;
//# sourceMappingURL=agencia-controller.js.map