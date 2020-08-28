const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {
        const precisa = await connection('precisa').select('*');
        return response.json(precisa);
    },
    async create(request, response) {
        const { name, rg, telefone, quantidade, idade, tipo, sexo } = request.body;

        await connection('precisa').insert({
            name,
            rg,
            telefone,
            quantidade,
            idade,
            tipo,
            sexo,
        });

        return response.json({ rg });
    },
    async delete(request, response) {
        const { rg } = request.params; //pegar o rg q vem lá do request.params

        await connection('precisa').where('rg', rg).delete();
        return response.status(204).send();
    }
}