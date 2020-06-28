const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const funcionario = await connection('funcionario')
            .select('*');

        return response.json(funcionario);
    }
}