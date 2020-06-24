const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) { //index -> nome do método q faz a listagem dos dados de uma tabela
        const precisa = await connection('necessita').select('*'); //quero selecionar todos os campos d etodos os registros da tabela funcionario
        return response.json(precisa);
    },
    async create(request, response) {
        const { name, rg, telefone, quantidade, idade, tipo, sexo } = request.body; //desestruturar os dados p/ pegar cada um dos dados numa variavel separada

        // const id = crypto.randomBytes(4).toString('HEX');
        await connection('necessita').insert({
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

        await connection('necessita').where('rg', rg).delete();
        return response.status(204).send();
    }
}