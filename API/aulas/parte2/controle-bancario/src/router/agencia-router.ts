import express, { Router } from 'express';
import { AgenciaController } from '../controller/agencia-controller';


const agenciaRouter: Router = express.Router();

const agenciaController: AgenciaController = new AgenciaController();

agenciaRouter.post('/criar/',(req, res) => {
    agenciaController.criar(req, res);
})

agenciaRouter.get('/', (req, res) => {
    agenciaController.listar(req, res);
});

agenciaRouter.put('/atualizar/',(req, res) => {
    agenciaController.atualizar(req, res);
})

agenciaRouter.delete('/excluir/',(req, res) => {
    agenciaController.excluir(req, res);
})

export default agenciaRouter;