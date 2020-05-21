const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const [doador] = await connection('doador').count();


        const doador = await connection('doador')
            .join('funcionario', 'funcionario.id', '*', 'doador.funcionario_id')
            .limit(5) //esquema de paginação
            .offset((page - 1) * 5)
            .select('*');
        response.header('X_Total-Count', count['count(*)']); //mostrando pro frontend qtos casos tem.(mostrando no header)
        return response.json(doador);
    },


    async create(request, response) {
        const { name, email, telefone, idade, sexo, tipo } = request.body;
        const funcionario_id = request.headers.authorization; //acessar o cabeçalho. Esse cabeçalho guarda informações -> autenticação do usuário,localização. Tudo q caracteriza o contexto daquela requisição
        //request.headers;    

        const [id] = await connection('doador').insert({
            name,
            email,
            telefone,
            idade,
            sexo,
            tipo,
            funcionario_id,
        });
        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const funcionario_id = request.headers.authorization; //verificar se o doador q vai ser excluido foi criado por esse func ou nao

        const doadores = await connection('doador')
            .where('id', id)
            .select('funcionario_id')
            .first();

        if (doadores.funcionario_id != funcionario_id) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }
        await connection('doador').where('id', id).delete();
        return response.status(204).send();
    }
};