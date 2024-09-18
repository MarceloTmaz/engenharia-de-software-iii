import { Router, Request, Response } from 'express';
import { JogoCtrl } from '../controllers/JogoCtrl';

const jogoRouter = Router();
const jogo = new JogoCtrl();
jogoRouter.get('/jogo', (req: Request, res: Response) => {

    jogo.listar(req, res);
});

jogoRouter.get('/jogo/ordem_alfabetica', (req: Request, res: Response) => {

    jogo.listarAlfabetica(req, res);
});/*
jogoRouter.post('/jogo/deletar', (req: Request, res: Response) => {
    jogo.removerjogo(req, res);
});*/
jogoRouter.get('/jogo/deletar/:id', (req: Request, res: Response) => {
    jogo.removerjogo(req, res);
});

export default jogoRouter;
