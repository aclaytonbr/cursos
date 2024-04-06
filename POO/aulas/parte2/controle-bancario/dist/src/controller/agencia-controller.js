"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenciaController = void 0;
const agencia_service_1 = require("../service/agencia-service");
class AgenciaController {
    constructor() {
        this.agenciaService = new agencia_service_1.AgenciaService();
        // public listarTodos(req: Request, res: Response) {
        //     const agencias = this.agenciaModel.listar();
        //     if (!agencias) {
        //         res.status(404).json({ message: 'Não há agencias cadastrados' });
        //     } else {
        //         res.json(agencias);
        //     }
        // }
        // //busca com 2 parâmetros ????
        // public buscarPorCodigo(req: Request, res: Response): void {
        //     const { codigo } = req.params;
        //     const agencia = this.agenciaModel.buscarPorCodigo(codigo);
        //     if (agencia) {
        //         res.json(agencia);
        //     } else {
        //         res.status(404).json({ message: 'Agencia não encontrado' });
        //     }   
        // }
    }
}
exports.AgenciaController = AgenciaController;
//# sourceMappingURL=agencia-controller.js.map