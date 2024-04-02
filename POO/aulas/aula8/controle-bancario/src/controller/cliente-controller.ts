import { Request, Response } from 'express';
import { Cliente } from '../model/cliente';
import { ICliente } from '../interface/cliente-interface';

export class ClienteController {

    private clienteModel: Cliente = new Cliente();

    public listarTodos(req: Request, res: Response) {
        try {
            const clientes: Cliente[] = this.clienteModel.listar();
            if (!clientes) {
                res.status(404).json({ message: 'Não há clientes cadastrados' });
            } else {
                res.json(clientes);
            }
        } catch (error: any) {
            throw new Error("Erro ao tentar listar clientes [" + error.message + "]");
        }
    }

    public buscarPorCodigo(req: Request, res: Response): void {
        try {
            const { codigo } = req.params;
            const cliente = this.clienteModel.buscarPorCodigo(codigo);
            if (cliente) {
                res.json(cliente);
            } else {
                res.status(404).json({ message: 'Cliente não encontrado' });
            }
        } catch (error: any) {
            throw new Error("Erro ao tentar buscar um cliente [" + error.message + "]");
        }
    }

    public criarCliente(req: Request, res: Response): void {
        try {
            const novoCliente: ICliente = req.body;
            this.clienteModel.incluir(novoCliente);
            res.status(200).json({ message: 'Cliente criado com sucesso' });
        } catch (error: any) {
            throw new Error("Erro ao tentar cadastrar um cliente [" + error.message + "]");
        };
    }

    public atualizarCliente(req: Request, res: Response): void {
        const codigo = <string> req.query.id;
        const banco: ICliente = req.body;
        try {
            this.clienteModel.atualizar(codigo, banco)
            res.json({ message: 'Cliente atualizado com sucesso' });
        } catch (error: any) {
            throw new Error("Erro ao tentar atualizar um cliente [" + error.message + "]");
        }
    }

}