const connection = require('../database/connection');

module.exports = {
    async index(request, response) { //index -> nome do método q faz a listagem dos dados de uma tabela
        const precisa = await connection('precisa').select('*'); //quero selecionar todos os campos d etodos os registros da tabela funcionario
        return response.json(precisa);
    },
    async create(request, response) {
        const { name, telefone, quantidade, idade, tipo, sexo } = request.body;

        // const id = crypto.randomBytes(4).toString('HEX');
        await connection('precisa').insert({
            telefone,
            name,
            rg,
            quantidade,
            idade,
            tipo,
            sexo,
        })

        return response.json({ rg });
    },
    async delete(request, response) {
        const { rg } = request.params; //pegar o email q vem lá do request.params

        await connection('precisa').where('rg', rg).delete();
        return response.status(204).send();
    }
}