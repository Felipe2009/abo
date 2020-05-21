const connection = require('../database/connection');

module.exports = {
    async create(request, response) { //request é responsavel por guardar todos os dados q vem atraves da requisição do usuário. E o response é responsável por retornar uma resposta para o usuário
        const { id } = request.body;

        const funcionario = await connection('funcionario')
            .where('id', id)
            .select('name')
            .first();

        if (!funcionario) {
            return response.status(400).json({ error: 'No funcionario found with this ID' });
        }
        return response.json(funcionario);
    }
}