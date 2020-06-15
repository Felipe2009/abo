const connection = require('../database/connection');
// os role de criar id  
// const crypto = require('crypto'); 

module.exports = {
    async index(request, response) { //index -> nome do método q faz a listagem dos dados de uma tabela
        const funcionario = await connection('funcionario').select('*'); //quero selecionar todos os campos d etodos os registros da tabela funcionario
        return response.json(funcionario);
    },
    async create(request, response) {
        const { name, email, whatsapp, idade, senha, cpf } = request.body; //desestruturar os dados p/ pegar cada um dos dados numa variavel separada

        // const id = crypto.randomBytes(4).toString('HEX');
        await connection('funcionario').insert({
            email,
            name,
            cpf,
            whatsapp,
            idade,
            senha,
        })

        return response.json({ email });
    }
}