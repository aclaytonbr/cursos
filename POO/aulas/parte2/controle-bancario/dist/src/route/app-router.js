"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
//importação de rotas
const banco_router_1 = __importDefault(require("../route/banco-router"));
class appRouter {
    static carregarRotas(app) {
        app.use('/api/banco', banco_router_1.default);
        //app.use('/api/correntista', clienteRouter)
    }
}
exports.appRouter = appRouter;
exports.default = appRouter;
//# sourceMappingURL=app-router.js.map