const express = require('express'); //importando o modulo express dentro da variavel express
const app = express();

/*
Métodos HTTP:
Get -> Buscar uma informação do backend
Post -> Criar uma informação no backend
Put -> Alterar uma informação no backend
Delete -> Deletar uma informação no backend




*/
app.get('/users', (request, response) => {
    return response.json({
        evento: "Semana de estudo",
        pessoa: 'Felipe'
    });
})
app.listen(3333); //para acessar tem q ser localhost:/3333