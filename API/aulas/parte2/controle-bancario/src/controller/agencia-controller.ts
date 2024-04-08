import { Request, Response } from 'express';
import { IAgencia, IBuscaAgencia } from '../interface/agencia-interface';
import { AgenciaService } from '../service/agencia-service';


export class AgenciaController {
    
    private agenciaService: AgenciaService = new AgenciaService();

    public async criar(req: Request, res: Response) {
        try {
            const novaAgencia: IAgencia = req.body;
            await this.agenciaService.incluir(novaAgencia)
            res.status(201).json({ message: 'Agencia criada com sucesso' });
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar incluir um nova agencia'});
        }
    }

    public async listar(req: Request, res: Response) {
        try {
            const agencias = await this.agenciaService.listar();
            if (!agencias) {
                res.status(404).json({message: 'Não há agencias cadastradas' });
            } else {
                res.status(200).json(agencias);
            }
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar listar agencias' });
        }
    }

    public async buscaragenciaPorCodigo(req: Request, res: Response) {
        try {
            //retira os parâmetros da requisicao
            const { codigo } = req.params;
            const { idbanco } = req.params;
            
            //monta a interface de busca
            const ibusca_agencia : IBuscaAgencia = { 
                codigo: codigo, 
                id_banco: idbanco
            };

            //solicita a busca
            const agencia = await this.agenciaService.buscarPorCodigo(ibusca_agencia);
            if (agencia) {
                res.status(200).json(agencia);
            } else {
                res.status(404).json({message: 'Agencia não encontrado' });
            }
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar buscar agencia'});
        }
    }

    public async atualizar(req: Request, res: Response) {
        //retira os parâmetros da requisicao
        const { codigo } = req.params;
        const { idbanco } = req.params;
        
        //monta a interface de busca
        const ibusca_agencia : IBuscaAgencia = { 
            codigo: codigo, 
            id_banco: idbanco
        };
        try {
            const iagencia: IAgencia = req.body;
            await this.agenciaService.atualizar(ibusca_agencia,iagencia);
            res.status(200).json({ message: 'agencia atualizado com sucesso' });
        } catch (erro: any) {
            console.log(erro.message);
            res.status(404).json({message: 'Erro ao tentar alterar agencia'});
        }
    }

    public async excluir(req: Request, res: Response) {
        //retira os parâmetros da requisicao
        const { codigo } = req.params;
        const { idbanco } = req.params;
        
        //monta a interface de busca
        const ibusca_agencia : IBuscaAgencia = { 
            codigo: codigo, 
            id_banco: idbanco
        };

        try {
            await this.agenciaService.excluir(ibusca_agencia);
            res.status(200).json({ message: 'Agencia excluída com sucesso' });   
        } catch (erro: any) {
            res.status(404).json({message: 'Erro ao tentar excluir agencia'});
        }
    }

}
