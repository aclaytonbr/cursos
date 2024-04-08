import {Request, Response } from 'express'

//importação de rotas
import bancoRouter from "../route/banco-router";
//import agenciaRouter from '../route/agencia-router';
//import correntistaRouter from '../route/correntista-router';
//import contaRouter from '../route/conta-router';

export class appRouter {

    static carregarRotas(app: any) {
        app.use('/api/banco', bancoRouter);
        //app.use('/api/agencia', agenciaRouter)
    }

}

export default appRouter;