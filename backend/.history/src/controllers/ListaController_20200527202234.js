const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const funcionario_email = request.headers.authorization; //acessando os dados do func q ta logado

        const doador = await connection('doador') //buscar doadores q esse func criou
            //.where('funcionario_id', funcionario_id)
            .select('*'); //mudar isso

        return response.json(doador);
    }
}