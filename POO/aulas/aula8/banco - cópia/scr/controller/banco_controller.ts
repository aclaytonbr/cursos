
import { Banco } from "../model/banco";
import express from 'express';


//Rota para banco
const bancos: Banco[] = [];

const router = express.Router();

// Rota de exemplo
router.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Obter todos os bancos
router.get('/api/bancos', (req, res) => {
    res.json(bancos);
});

// Obter um banco por ID
router.get('/api/bancos/:id', (req, res) => {
    const id = <string> req.params.id;
    const banco = <Banco> bancos.find(banco => banco.codigo === id);
    if (banco) {
        res.json(banco);
    } else {
        res.status(404).json({ message: 'Banco não encontrado.' });
    }
});

// Adicionar um novo banco
router.post('/api/banco', (req, res) => {
    const newBanco = <Banco> req.body;
    bancos.push(newBanco);
    res.status(201).json(newBanco);
});

export default router;