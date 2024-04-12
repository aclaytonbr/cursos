import express, { Request, Response } from "express"
import bancoRouter from "./router/banco-router";
import cors from 'cors';

const app = express();

const port = 3000;

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

app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });
app.use(bancoRouter);

app.use(express.json);

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}/api`);
});
