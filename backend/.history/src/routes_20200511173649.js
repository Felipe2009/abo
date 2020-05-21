const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.post('/sessions', SessionController.create);

//criando rota para listar todas as ongs do banco de dados
routes.get('/funcionario', OngController.index)
routes.post('/funcionario', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/doador', IncidentController.index);
routes.post('/doador', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes; //exportando variavel dentro de um arquivo