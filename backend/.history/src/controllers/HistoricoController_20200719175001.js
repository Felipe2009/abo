const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const historico = await connection('agendar').select('*');

        return response.json(historico);
    },

}