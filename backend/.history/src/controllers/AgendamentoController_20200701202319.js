const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD
//const { put } = require('../routes');

module.exports = {
    async index(request, response) {
        const agendar = await connection('agendar').select('*');

        return response.json(agendar);
    },


    async create(request, response) {
        const { name, rg, dia, telefone, horario, sexo, tipo } = request.body; //pegar o corpo/os dados da requisição
        //desestruturar os dados p/ pegar cada um dos dados numa variavel separada          

        await connection('agendar').insert({ //ponho o nome da tabela q quero inserir dados e o insert insere dados ali dentro. Aí vc poe todas as colunas q vc quer inserir la dentro
            name,
            rg,
            dia,
            telefone,
            sexo,
            tipo,
            horario,

        });

        return response.json({ email });
    },

    async delete(request, response) {
        const { rg } = request.params;

        await connection('agendar').where('rg', rg).delete();
        return response.status(204).send();
    },
};