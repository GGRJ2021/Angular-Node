/* Arquivo principal do projeto onde será definido a rota principal
e as demais rotas */

/* Chama o express que é nossa ferramenta para facilitar
a utilização da api 

Realiza os mesmos passos de person route, olhar os comentários
lá*/
const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

/* Importando ferramentas do express para trabalhar com 
o recebimento em json*/
app.use(express.json())
app.use(express.urlencoded({extended:true}));

/* Define que a rota principal irá chamar index  */
app.use('/', index);

/* Define que a rota person irá chamar o arquivo personRoute
Que contem as demais rotas  */
app.use('/api/persons', personRoute);
module.exports = app;