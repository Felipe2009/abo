const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const fluxo = await connection('cadastroHistorico').select('*');

        return response.json(fluxo);
    }
}