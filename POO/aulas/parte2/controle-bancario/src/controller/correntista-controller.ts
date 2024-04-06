import { Request, Response } from 'express';
import { CorrentistaService } from '../service/correntista-service';
import { ICorrentista } from '../interface/correntista-interface';

export class ClienteController {

    private clienteService: CorrentistaService = new CorrentistaService();

    public listarTodos(req: Request, res: Response) {
        try {

        } catch (error: any) {
            throw new Error("Erro ao tentar listar clientes [" + error.message + "]");
        }
    }

    public buscarPorCodigo(req: Request, res: Response): void {
        try {

        } catch (error: any) {
            throw new Error("Erro ao tentar buscar um cliente [" + error.message + "]");
        }
    }

    public criarCliente(req: Request, res: Response): void {
        try {

        } catch (error: any) {
            throw new Error("Erro ao tentar cadastrar um cliente [" + error.message + "]");
        };
    }

    public atualizarCliente(req: Request, res: Response): void {

    }

}