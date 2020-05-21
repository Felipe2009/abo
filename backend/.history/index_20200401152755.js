const express = require('express'); //importando o modulo express dentro da variavel express
const app = express();
app.get('/', (request, response) => {
    return response.json({
        evento: "Semana de estudo",
        pessoa: 'Felipe'
    });
})
app.listen(3333); //para acessar tem q ser localhost:/3333