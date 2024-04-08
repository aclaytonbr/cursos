import express, { Router } from 'express';
import { ClienteController } from '../controller/correntista-controller';


const clienteRouter: Router = express.Router();

const clienteController: ClienteController = new ClienteController();

clienteRouter.get('/listar', (req, res) => {
    clienteController.listarTodos(req, res);
});

clienteRouter.post('/criar/',(req, res) => {
    clienteController.criarCliente(req, res);
})

clienteRouter.put('/atualizar/',(req, res) => {
    clienteController.atualizarCliente(req, res);
})

export default clienteRouter;