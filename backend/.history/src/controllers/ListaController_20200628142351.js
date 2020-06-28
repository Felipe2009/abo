const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const doador = await connection('doador').select('*');

        return response.json(doador);
    }
}