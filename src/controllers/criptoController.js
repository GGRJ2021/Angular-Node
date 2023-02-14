/* Req = request a informação que o usuário envia
res = a resposta para o usuário */
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');

    /* ir na base de dados
    
    pegar a frase
    
    res.status(201).send(frase)
    */
};

exports.put = (req, res, next) => {

    /* obtem valores digitados na rota
    
    esses valores foram definidos no arquivo routerPerso
    
    Estou acessando o valor*/
    let id = req.params.id;
    let nomeResponsavel = req.params.nomeResponsavel;

    res.status(201).send(`Requisição recebida com sucesso! ${id} ${nomeResponsavel}`);
};

exports.bia = (req, res) => {
    res.status(201).send('oi')
};

exports.delete = (req, res, next) => {

    /* 
    - instruções para acesso o banco
    - instruções para deletar o aluno de determinado id
    */

    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.meiameia = (req, res, next) => {

    let retorno = {
        nome: "Polido",
        idade: req.body.idade
    }

    res.status(200).send(retorno);
};