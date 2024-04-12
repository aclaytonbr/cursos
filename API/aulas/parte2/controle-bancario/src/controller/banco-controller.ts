import { Request, Response } from 'express';
import { IBanco } from '../interface/banco-interface';
import { BancoService } from '../service/banco-service';


export class BancoController {
    
    private bancoService: BancoService = new BancoService();

    public async criarBanco(req: Request, res: Response) {

        try {
            const novoBanco: IBanco = req.body;
            await this.bancoService.incluir(novoBanco.codigo, novoBanco.nome);
            res.status(201).json({ message: 'Banco criado com sucesso' });
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar incluir um novo banco'});
        }
    }

    public async listarTodos(req: Request, res: Response) {
        try {
            const bancos = await this.bancoService.listar();
            if (!bancos) {
                res.status(404).json({message: 'Não há bancos cadastrados' });
            } else {
                res.json(bancos);
            }
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar listar bancos' });
        }
    }

    public async buscarBancoPorCodigo(req: Request, res: Response) {
        const chave =  <string> req.query.codigo;      
        try {
            const banco = await this.bancoService.buscarPorCodigo(chave);
            if (banco) {
                res.status(200).json(banco);
            } else {
                res.status(404).json({message: 'Banco não encontrado' });
            }
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar buscar banco'});
        }
    }

    public async atualizarBanco(req: Request, res: Response) {
        const codigo = <string> req.query.id;
        const banco: IBanco = req.body;
        try {
            await this.bancoService.atualizar(codigo, banco)
            res.status(200).json({ message: 'Banco atualizado com sucesso' });
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar alterar banco'});
        }
    }

    public async excluirBanco(req: Request, res: Response) {
        try {
            const { codigo } = req.params;
            await this.bancoService.excluir(codigo)
            res.status(200).json({ message: 'Banco excluído com sucesso' });   
        } catch (erro: any) {
            res.status(404).json({message: 'Erro ao tentar alterar banco'});
        }
    }

}
