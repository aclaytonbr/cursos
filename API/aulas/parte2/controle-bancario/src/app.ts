import express,  {Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import sequelize from './database/sequelize/sequelize';
import appRouter from './router/app-router';
import cors from 'cors';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
const PORT = process.env.PORT || 3000;

//instancia o servidor
const app = express();


// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ou substitua '*' pela origem permitida
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//carrega as rotas no servidor
app.use(express.json());
app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });
appRouter.carregarRotas(app);

async function initialize() {
    
    // Tenta conectar a aplicação com o gerenciador de banco de dados
    try {
        await sequelize.authenticate();
        console.log('A conexão com o banco de dados foi estabelecida com sucesso');
        await sequelize.sync({ alter: true });
    } catch (erro: any) {
        throw new Error("Não foi possível estabelecer conexão com o banco de dados: " + erro.message);
    }

    //Coloca o servidor em modo de espera de requisições
    try {    
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro: any) {
        throw new Error("Não foi possível iniciar o servidor de API: " + erro.message);
    }

}

initialize();
