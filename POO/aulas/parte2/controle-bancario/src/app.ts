import express,  {Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import sequelize from './database/sequelize/sequelize';
import appRouter from './route/app-router';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
const PORT = process.env.PORT || 3000;


//instancia o servidor
const app = express();

//carrega as rotas no servidor
app.use(express.json());
app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });
appRouter.carregarRotas(app);

async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Sincroniza os models com o database
        await sequelize.sync({ alter: true });

        //coloca o servidor em modo de espera de requisições
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Não foi possível conectar com o banco de dados:', error);
    }
}

initialize();