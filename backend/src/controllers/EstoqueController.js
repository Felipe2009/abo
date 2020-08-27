const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const estoque = await connection('estoque')
            .select('*');

        return response.json(estoque);
    },
    async delete(request, response) {
        const { tipo } = request.params;

        await connection('estoque').delete();
        return response.status(204).send();

    },
}