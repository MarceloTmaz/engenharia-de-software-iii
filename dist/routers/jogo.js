"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JogoCtrl_1 = require("../controllers/JogoCtrl");
const jogoRouter = (0, express_1.Router)();
const jogo = new JogoCtrl_1.JogoCtrl();
jogoRouter.get('/jogo', (req, res) => {
    jogo.listar(req, res);
});
jogoRouter.get('/jogo/ordem_alfabetica', (req, res) => {
    jogo.listarAlfabetica(req, res);
});
jogoRouter.post('/jogo/deletar', (req, res) => {
    jogo.removerjogo(req, res);
});
exports.default = jogoRouter;
