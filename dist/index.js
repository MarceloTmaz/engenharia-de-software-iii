"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jogo_1 = __importDefault(require("./routers/jogo"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = require('path');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get("/", (req, res) => {
    res.send("hello word");
});
app.use(jogo_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log("pao");
});
