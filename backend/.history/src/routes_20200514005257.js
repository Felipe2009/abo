const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.post('/sessions', SessionController.create);

//criando rota para listar todas as ongs do banco de dados
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create);

routes.get('/perfil', ProfileController.index);

routes.get('/doador', DoadorController.index);
routes.post('/doador', DoadorController.create);
routes.delete('/doador/:id', DoadorController.delete);



module.exports = routes; //exportando variavel dentro de um arquivo