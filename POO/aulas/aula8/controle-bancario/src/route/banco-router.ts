import express, { Router } from 'express';
import { BancoController } from '../controller/banco-controller';


const routerBanco: Router = express.Router();

const bancoController: BancoController = new BancoController();

routerBanco.get('/', (req, res) => {
    bancoController.listarTodos(req, res);
});

routerBanco.post('/criar/',(req, res) => {
    bancoController.criarBanco(req, res);
})

routerBanco.put('/atualizar/',(req, res) => {
    bancoController.atualizarBanco(req, res);
})

export default routerBanco;