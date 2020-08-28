const connection = require('../database/connection');
module.exports = {
    async index(request, response) {
        const agendar = await connection('agendar').select('*');

        return response.json(agendar);
    },


    async create(request, response) {
        const { name, rg, dia, telefone, horario, sexo, tipo } = request.body;

        await connection('agendar').insert({
            name,
            rg,
            dia,
            telefone,
            sexo,
            tipo,
            horario,

        });

        return response.json({ name });
    },

    async delete(request, response) {
        const { rg } = request.params;

        await connection('agendar').where('rg', rg).delete();
        return response.status(204).send();
    },
};