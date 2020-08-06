const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {

        const historico = await connection('agendar').select('*');

        return response.json(historico);
    },
    async create(request, response) {
        const { name, email, rg, sexo, dia, quantidade, condicao } = request.body; //desestruturar os dados p/ pegar cada um dos dados numa variavel separada

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