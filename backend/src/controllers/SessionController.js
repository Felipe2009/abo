const connection = require('../database/connection');


//responsabilidade é saber se o funcionario existe ou não
module.exports = {
    async create(request, response) { //request é responsavel por guardar todos os dados q vem atraves da requisição do usuário. E o response é responsável por retornar uma resposta para o usuário
        const { email } = request.body;

        const funcionario = await connection('funcionario') //verifica se func existe
            .where('email', email) //o id da const
            .select('name') //unica info q vo exibir no front
            .first(); //só exibir a 1a pq só tem ela

        if (!funcionario) {
            return response.status(400).json({ error: 'No funcionario found with this ID' });
        }
        return response.json(funcionario);
    }
}