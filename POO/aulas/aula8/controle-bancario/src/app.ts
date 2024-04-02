import express,  {Request, Response, Router } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'

//importação de rotas
import bancoRouter from "./route/banco-router"

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });
const PORT = process.env.PORT || 3000;

//instancia o servidor
const app = express();

//carrega as rotas no servidor
app.use(express.json());
app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });
app.use('/api/bancos', bancoRouter);

//coloca o servidor em modo de espera de requisições
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});