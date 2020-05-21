const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) { //index -> nome do método q faz a listagem dos dados de uma tabela
        const funcionario = await connection('funcionario').select('*');
        return response.json(funcionario);
    },
    async create(request, response) {
        const { name, email, whatsapp, idade, senha } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        await connection('funcionario').insert({
            id,
            name,
            email,
            whatsapp,
            idade,
            senha,
        })

        return response.json({ id });
    }
}