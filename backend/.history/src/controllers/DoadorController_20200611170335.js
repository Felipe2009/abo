const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const [count] = await connection('doador').count();


        const doador = await connection('doador')
            //.join('funcionario', 'funcionario.id', '*', 'doador.funcionario_id') aqui os dados do funcionario, mas nao precisa aqui
            .limit(5) //esquema de paginação, vai retornar 5 registros.
            .offset((page - 1) * 5)
            .select('*');
        response.header('X_Total-Count', count['count(*)']); //mostrando pro frontend qtos casos tem.(mostrando no header)
        //X_Total-Count é o nome q eu dei pro total de itens q tem na lista 
        return response.json(doador);
    },


    async create(request, response) {
        const { name, cpf, email, telefone, idade, sexo, tipo, ultima } = request.body; //pegar o corpo/os dados da requisição
        //const funcionario_id = request.headers.authorization; //acessar o cabeçalho. Esse cabeçalho guarda informações -> autenticação do usuário,localização. Tudo q caracteriza o contexto daquela requisição
        //request.headers;    

        //const [email] =
        await connection('doador').insert({
            name,
            cpf,
            email,
            telefone,
            idade,
            sexo,
            tipo,
            ultima,

        });
        return response.json({ email });
    },
    async delete(request, response) {
        const { email } = request.params; //pegar o email q vem lá do request.params
        // const funcionario_id = request.headers.authorization; //verificar se o doador q vai ser excluido foi criado por esse func ou nao

        // const doadores = await connection('doador') //ele verifica se quem ta apagando foi quem criou... não necessario
        //     .where('id', id)
        //     .select('funcionario_id')
        //     .first();

        // if (doadores.funcionario_id != funcionario_id) {
        //     return response.status(401).json({ error: 'Operation not permitted' });
        // }
        await connection('doador').where('email', email).delete();
        return response.status(204).send();
    }
};