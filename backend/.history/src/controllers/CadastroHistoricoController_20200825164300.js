const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD
//const { put } = require('../routes');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query //buscar dentro do request.query um parametro page

        const [count] = await connection('cadastroHistorico').count(); //retorna a qte de doadores


        const cadastroHistorico = await connection('cadastroHistorico').select('*');
        response.header('X_Total-Count', count['count(*)']); //mostrando pro frontend qtos casos tem.(mostrando no header)
        //X_Total-Count ->nome p/ total de itens q tem na lista 
        return response.json(cadastroHistorico);
    },


    async create(request, response) {
        const { name, cpf, sexo, tipo, dia, horario, quantidade, condicao } = request.body; //pegar o corpo/os dados da requisição
        //desestruturar os dados p/ pegar cada um dos dados numa variavel separada          

        await connection('cadastroHistorico').insert({ //ponho o nome da tabela q quero inserir dados e o insert insere dados ali dentro. Aí vc poe todas as colunas q vc quer inserir la dentro
            name,
            cpf,
            sexo,
            tipo,
            dia,
            horario,
            quantidade,
            condicao,

        });
        if (connection('estoque').where('tipo', tipo).count('tipo') > 0) {
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