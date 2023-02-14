/* As rotas são a porta de entrada da nossa aplicação 
elas podem carregar valores que serão passados para os 
nossos controllers*/

/* E a farramenta que auxilia na criação das nosssas rotas */
const express = require('express');

/* O express possui um modulo para facilitar a criação de rotas
aqui estamos chamando este modulo da variavel acima express */
const router = express.Router();

/* a variavel abaixo está invocando o nosso controllers 
que está em outro arquivo logo podemos utilizar os metodos
dele da sequinte foma controller.post, controller.put...
o nome da variavel poderia ser qual quer uma como turma
porém para acionar seria turma.post, turma.put... */
const controller = require('../controllers/criptoController')

/* Aqui o nosso router está criando as rotas e informando para
qual controller será direcionado */
//router.post('/multiplcar/:valor1/:valor2', controller.multiplicar);

router.put('/:id/:nomeResponsavel', controller.put);
router.delete('/:id', controller.delete);

router.post('/rota/meiameia', controller.meiameia)

router.post('/adiciona-moeda', controller)
router.get('/obtem-moeda', controller)
router.put('/altera-moeda', controller)
router.delete('/deleta-moeda', controller)

module.exports = router;