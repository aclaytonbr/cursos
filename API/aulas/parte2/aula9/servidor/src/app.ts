import express, { Request, Response } from "express"


const app = express();

const PORT = 3000;

app.use(express.json);

app.get('/api', (req: Request, res: Response) => { res.send("Bem vindo a api bancária"); });

app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});