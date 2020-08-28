const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD


module.exports = {
    async index(request, response) {
        const funcionario = await connection('funcionario').select('*');
        return response.json(funcionario);
    },
    async create(request, response) {
        const { name, email, whatsapp, idade, senha, cpf } = request.body;

        await connection('funcionario').insert({
            email,
            name,
            cpf,
            whatsapp,
            idade,
            senha,
        })

        return response.json({ email });
    },
    async delete(request, response) {
        const { cpf } = request.params; //pegar o cpf q vem lá do request.params

        await connection('funcionario').where('cpf', cpf).delete();
        return response.status(204).send();
    }

}