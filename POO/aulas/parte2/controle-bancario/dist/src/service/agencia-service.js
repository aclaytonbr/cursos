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
exports.AgenciaService = void 0;
const agencia_1 = __importDefault(require("../model/agencia"));
class AgenciaService {
    constructor() {
    }
    //CRUD
    incluir(agencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const novaAgencia = yield agencia_1.default.create({
                    codigo: agencia.codigo,
                    nome: agencia.nome,
                    endereco: agencia.endereco,
                    idBanco: parseInt(agencia.idBanco)
                });
                console.log('Nova agencia criada com sucesso:', novaAgencia.toJSON());
            }
            catch (e) {
                throw new Error("Erro ao incluir uma nova agencia: " + e.message);
            }
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agencias = yield agencia_1.default.findAll();
                return agencias;
            }
            catch (e) {
                throw new Error("Erro ao buscar agencias: " + e.message);
            }
        });
    }
    buscarPorCodigo(ibusca_agencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtro = {
                    where: {
                        id: ibusca_agencia.codigo,
                        idBanco: parseInt(ibusca_agencia.id_banco)
                    }
                };
                const agencia = yield agencia_1.default.findOne(filtro);
                return agencia;
            }
            catch (e) {
                throw new Error("Erro ao buscar agencia: " + e.message);
            }
        });
    }
    atualizar(ibusca_agencia, iagencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtro = {
                    where: {
                        codigo: ibusca_agencia.codigo,
                        idBanco: parseInt(ibusca_agencia.id_banco),
                    }
                };
                //a agencia é buscada usando o filtro acima
                const agencia = yield agencia_1.default.findOne(filtro);
                if (agencia) {
                    agencia.codigo = iagencia.codigo;
                    agencia.nome = iagencia.nome;
                    agencia.endereco = iagencia.endereco;
                    yield agencia.save();
                    console.log('Dados da agencia foram atualizados com sucesso.');
                }
                else {
                    console.log('Agencia não encontrada não encontrado.');
                }
            }
            catch (error) {
                throw new Error('Erro ao atualizar agencia: ' + error.message);
            }
        });
    }
    excluir(ibusca_agencia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtro = {
                    where: {
                        codigo: ibusca_agencia.codigo,
                        idBanco: parseInt(ibusca_agencia.id_banco)
                    }
                };
                //a agencia é buscada usando o filtro acima
                const agencia = yield agencia_1.default.findOne(filtro);
                //se a agencia for encontrada será excluída
                if (agencia) {
                    yield agencia.destroy();
                    console.log('Agencia excluído com sucesso.');
                }
                else {
                    console.log('Agencia não encontrado.');
                }
            }
            catch (error) {
                throw new Error('Erro ao excluir agencia: ' + error.message);
            }
        });
    }
}
exports.AgenciaService = AgenciaService;
//# sourceMappingURL=agencia-service.js.map