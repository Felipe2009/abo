const express = require('express'); //importando o modulo express dentro da variavel express
const routes = require('./routes'); //importando routes dentro da variavel routes. E tem q ter o ./ senao vai achar q routes é pacote como o express por exemplo, mas ele é um ariquivo
const cors = require('cors'); //importando o modulo cors dentro da variavel cors


const app = express();
app.use(cors()); //"p/ ter o controle de quem ta acessando a aplicação"
app.use(express.json()); //falando p/ q antes de todas as requisições o express vá no corpo das requisições e converta o json em um objeto do JS
app.use(routes);

/*
Métodos HTTP:
Get -> Buscar uma informação do backend
Post -> Criar uma informação no backend
Put -> Alterar uma informação no backend
Delete -> Deletar uma informação no backend
*/

/*
Tipos de parâmetros:
Query Params: Parâmetros nomeados enviados na rota após "?" e geralmente servem p/ filtros, paginação
Route Params: Parâmetros usados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

app.listen(3333); //para acessar tem q ser localhost:/3333

/*Request -> guarda os dados da requisição do usuario
  Response é responsável por retornar uma resposta ao usuario */