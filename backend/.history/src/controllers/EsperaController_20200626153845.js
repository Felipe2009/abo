const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const precisa = await connection('precisa')
            .select('*');

        return response.json(precisa);
    }
}