const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD


module.exports = {
    async index(request, response) { //index -> nome do método q faz a listagem dos dados de uma tabela
        const funcionario = await connection('funcionario').select('*'); //quero selecionar todos os campos d etodos os registros da tabela funcionario
        return response.json(funcionario);
    },
    async create(request, response) {
        const { name, email, whatsapp, idade, senha, cpf } = request.body; //desestruturar os dados p/ pegar cada um dos dados numa variavel separada

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