import express, { Router } from 'express';
import { bancos } from '../../database/mock-banco';

const bancoRouter: Router = express.Router();

bancoRouter.get('/banco/listar', (req, res) => {
    res.json(bancos[0])
});

bancoRouter.post('/banco/criar',(req, res) => {
    res.send(req.body);
})

bancoRouter.put('/banco/atualizar',(req, res) => {
   
})

bancoRouter.delete('/excluir',(req, res) => {
    
})

export default bancoRouter;