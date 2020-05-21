const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const funcionario_id = request.headers.authorization;

        const doador = await connection('doador')
            .where('funcionario_id', funcionario_id)
            .select('*');

        return response.json(doador);
    }
}