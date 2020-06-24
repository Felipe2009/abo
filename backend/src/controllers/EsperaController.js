const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const precisa = await connection('precisa') //buscar doadores q esse func criou
            //.where('funcionario_id', funcionario_id)
            .select('*'); //mudar isso

        return response.json(precisa);
    }
}