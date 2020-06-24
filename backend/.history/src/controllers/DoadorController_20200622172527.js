const connection = require('../database/connection'); //importando arquivo de conexão p/ se conectar com BD

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query //buscar dentro do request.query um parametro page

        const [count] = await connection('doador').count(); //retorna a qte de doadores


        const doador = await connection('doador')
            .limit(5) //esquema de paginação p/ nao retornar todos os doadores de uma só vez, vai retornar 5 registros.
            .offset((page - 1) * 10) //nao pode só multicplicar por 5 senão nao pega a 1a pag
            .select('*');
        response.header('X_Total-Count', count['count(*)']); //mostrando pro frontend qtos casos tem.(mostrando no header)
        //X_Total-Count ->nome p/ total de itens q tem na lista 
        return response.json(doador);
    },


    async create(request, response) {
        const { name, cpf, email, telefone, idade, sexo, tipo, ultima } = request.body; //pegar o corpo/os dados da requisição
        //desestruturar os dados p/ pegar cada um dos dados numa variavel separada          

        await connection('doador').insert({ //ponho o nome da tabela q quero inserir dados e o insert insere dados ali dentro. Aí vc poe todas as colunas q vc quer inserir la dentro
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
        const { cpf } = request.params; //pegar o cpf q vem lá do request.params

        await connection('doador').where('cpf', cpf).delete();
        return response.status(204).send();
    }
};