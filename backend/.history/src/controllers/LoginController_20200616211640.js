const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD


//responsabilidade é saber se o funcionario existe ou não
module.exports = {
    async create(request, response) { //request é responsavel por guardar todos os dados q vem atraves da requisição do usuário. E o response é responsável por retornar uma resposta para o usuário
        const { email, senha } = request.body; //buscar o email do func no corpo da requisição

        const funcionario = await connection('funcionario') //verifica se func existe
            .where('email', email) //o email do func
            .select('email', 'senha').first(); //unica info q vo exibir no front

        console.log(funcionario);
        if (!funcionario) {
            return response.status(400).json({ error: 'Nenhum funcionario encontrado' });
        }
        if (funcionario.senha !== senha) {
            return response.status(400).json({ error: 'Usuário/senha inválidos' });
        }
        return response.json(funcionario);
    }


}