const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const listaAgendamento = await connection('agendamento').select('*');

        return response.json(listaAgendamento);
    }
}