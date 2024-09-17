import express,{Request, Response} from "express";
import jogoRouter from "./routers/jogo";
import bodyParser from 'body-parser';
const path = require('path');

const app=express();
const port=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get("/",(req:Request,res:Response)=>{
    res.send("hello word");
});

app.use(jogoRouter)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
    console.log("pao")
})