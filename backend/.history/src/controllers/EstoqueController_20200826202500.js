const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const estoque = await connection('estoque')
            .select('*')
            .where('tipo', tipo);

        return response.json(estoque);
    }
}