import express, { Request, Response } from 'express';

//roteadores
import BancoController from './controller/banco_controller'

// Cria uma instância do aplicativo Express
const app = express();
const port = 3000;


// Middleware para processar solicitações JSON
app.use(express.json());
app.use('./controller/banco_controller.ts', BancoController)


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
