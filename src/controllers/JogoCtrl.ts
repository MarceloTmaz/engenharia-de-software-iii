import { Request, Response } from 'express';
import { Jogo } from '../Models/Jogo';

export class JogoCtrl{
    private _vetJogo:Jogo[]=[]
    private _nom:string=""
    private _desc:string=""
    private _id:number=3
    private _jogo:Jogo
    private _odernado:Jogo[]=[]
    constructor(){
        this._jogo=new Jogo("Nier automata", "A história dos andróides 2B, 9S e A2 e sua batalha para recuperar a distopia movida a máquinas",1);
        this._vetJogo.push(this._jogo);
        this._jogo=new Jogo("Forza Horizon 5","Explore um mundo aberto vibrante nas terras mexicanas com corridas divertidas",2);
        this._vetJogo.push(this._jogo);
        this._odernado=this._vetJogo
        
    }


    listar(req:Request, res:Response){
        this.ordemCriacao();
        const dados={
            'titulo':"Listar tarefa",
            'total':this._odernado
        }
        res.render('Jogo/Listar',{dados})
    }

    listarAlfabetica(req:Request, res:Response){
        this.ordemalfabetica();
        const dados={
            'titulo':"Listar tarefa",
            'total':this._odernado
        }
        res.render('Jogo/Listar',{dados})
    }
    removerjogo(req:Request, res:Response){

        
        let id=req.body.idR  
       // console.log(id)
        this.AremoverJogo(id)
        res.redirect('/jogo')
    }

    ordemalfabetica (){
        let ordem=""
        var jogoOrdenadas: Jogo[] = this._vetJogo.sort((t1, t2) => t1.getNome().localeCompare(t2.getNome()));
        this._odernado=jogoOrdenadas;
        for (let i = 0; i < this._odernado.length; i++) { 
            ordem+=this._odernado[i].getId()
        }
        return ordem
    }

    ordemCriacao(){
        let ordem=""
        var tarefasOrdenadas: Jogo[] = this._vetJogo.sort((t1, t2) =>  t1.getId()-t2.getId() );
        this._odernado=tarefasOrdenadas;
        for (let i = 0; i < this._odernado.length; i++) { 
            ordem+=this._odernado[i].getId()
        }
        return ordem
    }

    AremoverJogo(id:number){
        for(let i = 0;i<this._vetJogo.length;i++) {
            if(this._vetJogo[i].getId()==id){
               this._vetJogo.splice(i,1)
               return true;
            }
        }
        return false;
    }


}