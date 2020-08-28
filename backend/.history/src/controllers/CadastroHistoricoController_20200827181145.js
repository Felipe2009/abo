const connection = require('../database/connection');
module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query
        const [count] = await connection('cadastroHistorico').count();

        const cadastroHistorico = await connection('cadastroHistorico').select('*');
        response.header('X_Total-Count', count['count(*)']);
        return response.json(cadastroHistorico);
    },


    async create(request, response) {
        const { name, cpf, sexo, tipo, dia, horario, quantidade, condicao } = request.body;

        await connection('cadastroHistorico').insert({
            name,
            cpf,
            sexo,
            tipo,
            dia,
            horario,
            quantidade,
            condicao,

        });


        var total = await connection('estoque').where('tipo', tipo).count('tipo');
        var count = total[0]['count(`tipo`)'];
        if (count > 0) {
            if (condicao == 'Doador') {
                await connection('estoque').where('tipo', tipo).increment({ quantidade: quantidade });
            } else {
                await connection('estoque').where('tipo', tipo).decrement({ quantidade: quantidade });
            }
        } else {
            await connection('estoque').insert({
                tipo,
                quantidade,
            })
        }
        return response.json({ cpf });
    },

    async delete(request, response) {
        const { cpf } = request.params;

        await connection('cadastroHistorico').where('cpf', cpf).delete();
        return response.status(204).send();

    },

};