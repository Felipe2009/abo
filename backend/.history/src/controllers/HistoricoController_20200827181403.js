const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const historico = await connection('cadastroHistorico').select('*');

        return response.json(historico);
    },
    async create(request, response) {
        const { name, tipo, rg, sexo, dia, quantidade, condicao } = request.body;

        await connection('historico').insert({
            tipo,
            name,
            rg,
            sexo,
            dia,
            quantidade,
            condicao
        })

        return response.json({ rg });
    }

}