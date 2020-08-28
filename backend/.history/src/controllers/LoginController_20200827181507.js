const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD


module.exports = {
    async create(request, response) {
        const { email, senha } = request.body;

        const funcionario = await connection('funcionario')
            .where('email', email)
            .select('email', 'senha').first();

        if (!funcionario) {
            return response.status(400).json({ error: 'Nenhum funcionario encontrado' });
        }
        if (!(funcionario.senha == senha)) {
            return response.status(400).json({ error: 'xxx' });
        }
        return response.json(funcionario);
    }


}