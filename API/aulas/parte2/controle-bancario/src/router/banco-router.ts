import express, { Router } from 'express';
import { BancoController } from '../controller/banco-controller';


const bancoRouter: Router = express.Router();

const bancoController: BancoController = new BancoController();


bancoRouter.post('/criar',(req, res) => {
    bancoController.criarBanco(req, res);
})

bancoRouter.get('/', (req, res) => {
    bancoController.listarTodos(req, res);
});

bancoRouter.get('/buscar', (req, res) => {
    bancoController.buscarBancoPorCodigo(req, res);
});

bancoRouter.put('/atualizar',(req, res) => {
    bancoController.atualizarBanco(req, res);
})

bancoRouter.delete('/excluir',(req, res) => {
    bancoController.excluirBanco(req, res);
})

export default bancoRouter;