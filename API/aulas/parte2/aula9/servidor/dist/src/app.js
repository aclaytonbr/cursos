"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const banco_router_1 = __importDefault(require("./router/banco-router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
//configura o CORS
//permite todos os métodos e cabeçalhos
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});
app.get('/api', (req, res) => { res.send("Bem vindo a api bancária"); });
app.use(banco_router_1.default);
app.use(express_1.default.json);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api`);
});
//# sourceMappingURL=app.js.map