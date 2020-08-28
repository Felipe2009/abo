const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query //buscar dentro do request.query um parametro page

        const [count] = await connection('doador').count();

        const doador = await connection('doador').select('*');
        response.header('X_Total-Count', count['count(*)']);
        return response.json(doador);
    },


    async create(request, response) {
        const { name, cpf, email, telefone, idade, sexo, tipo, ultima } = request.body; //pegar o corpo/os dados da requisição

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
        const { cpf } = request.params;

        await connection('doador').where('cpf', cpf).delete();
        return response.status(204).send();
    },

    async put(request, response) {
        const { cpf } = request.params;
        await connection('doador').where('cpf', cpf).update();
        return response.status(204).send();
    }
};