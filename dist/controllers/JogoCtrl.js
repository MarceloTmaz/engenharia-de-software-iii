"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoCtrl = void 0;
const Jogo_1 = require("../Models/Jogo");
class JogoCtrl {
    constructor() {
        this._vetJogo = [];
        this._nom = "";
        this._desc = "";
        this._id = 3;
        this._odernado = [];
        this._jogo = new Jogo_1.Jogo("Nier automata", "A história dos andróides 2B, 9S e A2 e sua batalha para recuperar a distopia movida a máquinas", 1);
        this._vetJogo.push(this._jogo);
        this._jogo = new Jogo_1.Jogo("Forza Horizon 5", "Explore um mundo aberto vibrante nas terras mexicanas com corridas divertidas", 2);
        this._vetJogo.push(this._jogo);
        this._odernado = this._vetJogo;
    }
    listar(req, res) {
        this.ordemCriacao();
        const dados = {
            'titulo': "Listar jogo",
            'total': this._odernado
        };
        res.send({ dados });
    }
    listarAlfabetica(req, res) {
        this.ordemalfabetica();
        const dados = {
            'titulo': "Listar jogo",
            'total': this._odernado
        };
        res.send({ dados });
    }
    removerjogo(req, res) {
        let id = req.params.id;
        //console.log(id)
        this.AremoverJogo(Number(id));
        res.redirect('/jogo');
    }
    ordemalfabetica() {
        let ordem = "";
        var jogoOrdenadas = this._vetJogo.sort((t1, t2) => t1.getNome().localeCompare(t2.getNome()));
        this._odernado = jogoOrdenadas;
        for (let i = 0; i < this._odernado.length; i++) {
            ordem += this._odernado[i].getId();
        }
        return ordem;
    }
    ordemCriacao() {
        let ordem = "";
        var tarefasOrdenadas = this._vetJogo.sort((t1, t2) => t1.getId() - t2.getId());
        this._odernado = tarefasOrdenadas;
        for (let i = 0; i < this._odernado.length; i++) {
            ordem += this._odernado[i].getId();
        }
        return ordem;
    }
    AremoverJogo(id) {
        for (let i = 0; i < this._vetJogo.length; i++) {
            if (this._vetJogo[i].getId() == id) {
                this._vetJogo.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}
exports.JogoCtrl = JogoCtrl;
