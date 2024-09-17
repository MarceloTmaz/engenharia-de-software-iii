import {JogoCtrl} from '../src/controllers/JogoCtrl';
describe('Jogo',()=>{
  
    test('ordem alfabetica deve retorna o id dos jogos cadastrado em ordem alfabetica',()=>{
        let jogo=new JogoCtrl();
        let resposta=jogo.ordemalfabetica();
        expect(resposta).toBe("21");
    });

    test('ordem Criacao deve retorna o id em ordem de crianção (crescente) de todos os jogos cadastrado',()=>{
        let jogo=new JogoCtrl();
        let resposta=jogo.ordemCriacao();
        expect(resposta).toBe("12");

    })

    test('AremoverJogo deve retorna true para a removação de um jogo com id valido',()=>{
        let jogo=new JogoCtrl();
        let resposta=jogo.AremoverJogo(2);
        let esperado =true;
        expect(resposta).toBe(esperado);
    });
    test('AremoverJogo deve retorna false para a removação de um jogo com id invalido',()=>{
        let jogo=new JogoCtrl();
        let resposta=jogo.AremoverJogo(5);
        let esperado =false;
        expect(resposta).toBe(esperado);
    });
}); 