"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
const sequelize_1 = __importDefault(require("./database/sequelize/sequelize"));
const app_router_1 = __importDefault(require("./route/app-router"));
//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
const PORT = process.env.PORT || 3000;
//instancia o servidor
const app = (0, express_1.default)();
//carrega as rotas no servidor
app.use(express_1.default.json());
app.get('/api', (req, res) => { res.send("Bem vindo a api bancária"); });
app_router_1.default.carregarRotas(app);
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize_1.default.authenticate();
            console.log('Connection to the database has been established successfully.');
            // Sincroniza os models com o database
            yield sequelize_1.default.sync({ alter: true });
            //coloca o servidor em modo de espera de requisições
            app.listen(PORT, () => {
                console.log(`Servidor rodando em http://localhost:${PORT}`);
            });
        }
        catch (error) {
            console.error('Não foi possível conectar com o banco de dados:', error);
        }
    });
}
initialize();
//# sourceMappingURL=app.js.map