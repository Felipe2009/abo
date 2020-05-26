const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ListaController = require('./controllers/ListaController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.post('/sessions', SessionController.create); //criando sessão de login

//criando rota para listar todas as ongs do banco de dados
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create);

routes.get('/perfil', ListaController.index);

routes.get('/doador', DoadorController.index);
routes.post('/doador', DoadorController.create);
routes.delete('/doador', DoadorController.delete); //:id c/ o id q vc quer deletar



module.exports = routes; //exportando variavel dentro de um arquivo