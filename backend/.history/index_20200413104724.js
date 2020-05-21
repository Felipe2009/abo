const express = require('express'); //importando o modulo express dentro da variavel express
const app = express();

/*
Métodos HTTP:
Get -> Buscar uma informação do backend
Post -> Criar uma informação no backend
Put -> Alterar uma informação no backend
Delete -> Deletar uma informação no backend
*/

/*
Tipos de parâmetros:
Query: Parâmetros nomeados enviados na rota após "?" e geralmente servem p/ filtros, paginação
Route Params: Parâmetros usados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/
app.post('/users/:id', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({
        evento: "Semana de estudo",
        pessoa: 'Felipe'
    });
})
app.listen(3333); //para acessar tem q ser localhost:/3333