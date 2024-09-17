"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
class Jogo {
    constructor(nome, descri, id) {
        this.nome = "";
        this._descricao = "";
        this._id = -1;
        this._descricao = descri;
        this.nome = nome;
        this._id = id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    getId() {
        return this._id;
    }
    setId(novoid) {
        this._id = novoid;
    }
    getDesc() {
        return this._descricao;
    }
    setDesc(descri) {
        this._descricao = descri;
    }
}
exports.Jogo = Jogo;
