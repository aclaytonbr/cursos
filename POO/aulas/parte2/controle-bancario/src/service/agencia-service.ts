import { IAgencia, IBuscaAgencia } from "../interface/agencia-interface";
import Agencia from "../model/agencia";


export class AgenciaService {

    constructor() {
    }

    //CRUD
    public async incluir(agencia: IAgencia) {
        try {
            const novaAgencia = await Agencia.create({
                codigo: agencia.codigo,
                nome: agencia.nome,
                endereco: agencia.endereco,
                idBanco: parseInt(agencia.idBanco)
            });
            
            console.log('Nova agencia criada com sucesso:', novaAgencia.toJSON());
        } catch (e: any) {
            throw new Error("Erro ao incluir uma nova agencia: " + e.message);
        }
    }

    public async listar(): Promise<Agencia[]> {
        try {
            const agencias = await Agencia.findAll();
            return agencias;
        } catch (e: any) {
            throw new Error("Erro ao buscar agencias: " + e.message);
        }
    }

    public async buscarPorCodigo(ibusca_agencia: IBuscaAgencia): Promise<Agencia> {
        try {
            const filtro = {
                where: {
                    id: ibusca_agencia.codigo,
                    idBanco: parseInt(ibusca_agencia.id_banco)
                }
            }
            const agencia = <Agencia> await Agencia.findOne(filtro);
            return agencia;
        } catch (e: any) {
            throw new Error("Erro ao buscar agencia: " + e.message);
        }
    }

    public async atualizar(ibusca_agencia: IBuscaAgencia, iagencia: IAgencia) {
        try {
            const filtro = {
                where: {
                    codigo: ibusca_agencia.codigo,
                    idBanco: parseInt(ibusca_agencia.id_banco),
                }
            }
            //a agencia é buscada usando o filtro acima
            const agencia = <Agencia> await Agencia.findOne(filtro);

            if (agencia) {
                agencia.codigo = iagencia.codigo;
                agencia.nome = iagencia.nome;
                agencia.endereco = iagencia.endereco;
                await agencia.save();
                console.log('Dados da agencia foram atualizados com sucesso.');
            } else {
                console.log('Agencia não encontrada não encontrado.');
            }
        } catch (error: any) {
            throw new Error('Erro ao atualizar agencia: '+ error.message);
        }
    }

    public async excluir(ibusca_agencia: IBuscaAgencia) {
        try {
            const filtro = {
                where: {
                    codigo: ibusca_agencia.codigo,
                    idBanco: parseInt(ibusca_agencia.id_banco)
                }
            }
            //a agencia é buscada usando o filtro acima
            const agencia = <Agencia> await Agencia.findOne(filtro);
    
            //se a agencia for encontrada será excluída
            if (agencia) {
                await agencia.destroy();
                console.log('Agencia excluído com sucesso.');
            } else {
                console.log('Agencia não encontrado.');
            }
        } catch (error: any) {
            throw new Error('Erro ao excluir agencia: '+ error.message);
        }
    } 
}