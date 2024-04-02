import { Request, Response } from 'express';
import { IBanco } from '../interface/banco-interface';
import { Banco } from '../model/banco';


export class BancoController {
    
    private bancoModel: Banco = new Banco();

    public listarTodos(req: Request, res: Response) {
        const bancos: Banco[] = this.bancoModel.listar();
        if (!bancos) {
            res.status(404).json({ message: 'Não há bancos cadastrados' });
        } else {
            res.json(bancos);
        }
    }

    public buscarPorCodigo(req: Request, res: Response): void {
        const { codigo } = req.params;
        const banco = this.bancoModel.buscarPorCodigo(codigo);
        if (banco) {
            res.json(banco);
        } else {
            res.status(404).json({ message: 'Banco não encontrado' });
        }
    }

    public criarBanco(req: Request, res: Response): void {
        const novoBanco: IBanco = req.body;
        this.bancoModel.incluir(novoBanco.codigo, novoBanco.nome);
        res.status(201).json({ message: 'Banco criado com sucesso' });
    }

    public atualizarBanco(req: Request, res: Response): void {
        
        const codigo = <string> req.query.id;
        const banco: IBanco = req.body;

        if (this.bancoModel.atualizar(codigo, banco)) {
            res.json({ message: 'Banco atualizado com sucesso' });
        } else {
            res.json({ message: 'Erro ao tentar atualizar o banco' });
        }

    }

    public delete(req: Request, res: Response): void {
        const { codigo } = req.params;
        if (this.bancoModel.excluir(codigo)) {
            res.json({ message: 'Banco excluído com sucesso' });
        } else {
            res.json({ message: 'Erro ao tentar excluir o banco' });
        }
    }
}
