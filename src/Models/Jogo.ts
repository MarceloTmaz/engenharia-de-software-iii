import {Request, Response} from 'express'

export class Jogo {
    private nome: string="";
    private _descricao:string="";
    private _id=-1;

    constructor(nome:string, descri:string,id:number){
        this._descricao=descri
        this.nome=nome
        this._id=id
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }
    getId(): number {
        return this._id;
    }
    setId(novoid: number) {
        this._id = novoid;
    }
    getDesc(): string {
        return this._descricao;
    }
    setDesc(descri: string) {
        this._descricao = descri;
    }
}
