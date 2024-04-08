import { IBanco } from "../interface/banco-interface";
import Banco from "../model/banco";

export class BancoService {
    
    constructor() {
    }

    public async incluir(codigo: string, nome: string) {
        try {
            const novoBanco = await Banco.create({
                codigo: codigo,
                nome: nome
            });
            // O novo usuário foi criado com sucesso
            console.log('Novo banco criado:', novoBanco.toJSON());
        } catch (e: any) {
            throw new Error("Erro ao incluir um novo banco: " + e.message);
        }
    }

    public async listar(): Promise<Banco[]> {
        try {
            const bancos = await Banco.findAll();
            return bancos;
        } catch (e: any) {
            throw new Error("Erro ao buscar bancos: " + e.message);
        }
    }

    public async buscarPorCodigo(codigo: string): Promise<Banco> {
        try {
            const filtro = {
                where: {
                    codigo: codigo
                }
            }
            const banco = <Banco> await Banco.findOne(filtro);
            return banco;
        } catch (e: any) {
            throw new Error("Erro ao buscar banco: " + e.message);
        }
    }

    public async atualizar(id: string, ibanco: IBanco) {
        try {
            // Busque o usuário pelo ID
            const banco = <Banco> await Banco.findByPk(id);
    
            // Se o usuário for encontrado, atualize o email
            if (banco) {
                banco.codigo = ibanco.codigo;
                banco.nome = ibanco.nome;
                await banco.save();
                console.log('Dados do banco atualizados com sucesso.');
            } else {
                console.log('Banco não encontrado.');
            }
        } catch (error: any) {
            throw new Error('Erro ao atualizar banco: '+ error.message);
        }
    }

    public async excluir(id: string) {
        try {
            // Busque o usuário pelo ID
            const banco = <Banco> await Banco.findByPk(id);
    
            // Se o usuário for encontrado, atualize o email
            if (banco) {
                await banco.destroy();
                console.log('Banco excluído com sucesso.');
            } else {
                console.log('Banco não encontrado.');
            }
        } catch (error: any) {
            throw new Error('Erro ao excluir banco: '+ error.message);
        }   
    }

}