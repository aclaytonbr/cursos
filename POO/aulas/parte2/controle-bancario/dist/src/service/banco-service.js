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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoService = void 0;
const banco_1 = __importDefault(require("../model/banco"));
class BancoService {
    constructor() {
    }
    incluir(codigo, nome) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novoBanco = yield banco_1.default.create({
                    codigo: codigo,
                    nome: nome
                });
                // O novo usuário foi criado com sucesso
                console.log('Novo banco criado:', novoBanco.toJSON());
            }
            catch (e) {
                throw new Error("Erro ao incluir um novo banco: " + e.message);
            }
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bancos = yield banco_1.default.findAll();
                return bancos;
            }
            catch (e) {
                throw new Error("Erro ao buscar bancos: " + e.message);
            }
        });
    }
    buscarPorCodigo(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtro = {
                    where: {
                        codigo: codigo
                    }
                };
                const banco = yield banco_1.default.findOne(filtro);
                return banco;
            }
            catch (e) {
                throw new Error("Erro ao buscar banco: " + e.message);
            }
        });
    }
    atualizar(id, ibanco) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Busque o usuário pelo ID
                const banco = yield banco_1.default.findByPk(id);
                // Se o usuário for encontrado, atualize o email
                if (banco) {
                    banco.codigo = ibanco.codigo;
                    banco.nome = ibanco.nome;
                    yield banco.save();
                    console.log('Dados do banco atualizados com sucesso.');
                }
                else {
                    console.log('Banco não encontrado.');
                }
            }
            catch (error) {
                throw new Error('Erro ao atualizar email do usuário: ' + error.message);
            }
        });
    }
    excluir(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Busque o usuário pelo ID
                const banco = yield banco_1.default.findByPk(id);
                // Se o usuário for encontrado, atualize o email
                if (banco) {
                    yield banco.destroy();
                    console.log('Banco excluído com sucesso.');
                }
                else {
                    console.log('Banco não encontrado.');
                }
            }
            catch (error) {
                throw new Error('Erro ao atualizar email do usuário: ' + error.message);
            }
        });
    }
}
exports.BancoService = BancoService;
//# sourceMappingURL=banco-service.js.map