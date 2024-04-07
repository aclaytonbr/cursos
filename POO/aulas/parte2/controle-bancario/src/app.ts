import express,  {Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import sequelize from './database/sequelize/sequelize';
import appRouter from './route/app-router';
import cors from 'cors';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
const PORT = process.env.PORT || 3000;




//instancia o servidor
const app = express();

//configura o CORS
//permite todos os métodos e cabeçalhos
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// Middleware para definir o cabeçalho Content-Type em todas as respostas
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });

//carrega as rotas no servidor
app.use(express.json());
app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });
appRouter.carregarRotas(app);

async function initialize() {
    
    try {
        await sequelize.authenticate();
        console.log('A conexão com o banco de dados foi estabelecida com sucesso');
        
        // Sincroniza os models com o database
        await sequelize.sync({ alter: true });
    } catch (erro: any) {
        throw new Error("Não foi possível estabelecer conexão com o banco de dados: " + erro.message);
    }

    try {    
        //coloca o servidor em modo de espera de requisições
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro: any) {
        throw new Error("Não foi possível iniciar o servidor de API: " + erro.message);
    }

}

initialize();
