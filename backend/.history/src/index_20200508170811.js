const express = require('express'); //importando o modulo express dentro da variavel express
const routes = require('./routes'); //importando o modulo routes dentro da variavel routes
const cors = require('cors'); //importando o modulo cors dentro da variavel cors


const app = express();
app.use(cors());
app.use(express.json());
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
Query: Parâmetros nomeados enviados na rota após "?" e geralmente servem p/ filtros, paginação
Route Params: Parâmetros usados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*Tipos de BD
SQL:MySQL,SQLite,PostgreSQL,SQL Server
NoSQL: MongoDB,CouchDB, etc...
*/

/*
Driver: SELECT * from users
QueryBuilder: table('users'),select ('*).where()

*/

app.listen(3333); //para acessar tem q ser localhost:/3333