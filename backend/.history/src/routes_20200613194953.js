const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ListaController = require('./controllers/ListaController')
const LoginController = require('./controllers/LoginController')

const routes = express.Router();
routes.post('/login', LoginController.create); //criando sessão de login

//criando rota para listar todas os funcionarios do banco de dados
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create);

routes.get('/lista', ListaController.index);

routes.get('/doador', DoadorController.index);
routes.post('/doador', DoadorController.create);
routes.delete('/doador/:cpf', DoadorController.delete); //:id c/ o id q vc quer deletar

routes.post('/precisa', PrecisaController.create);
routes.get('/precisa', PrecisaController.index)
routes.delete('/precisa/:nome', PrecisaController.delete);



module.exports = routes; //exportando variavel dentro de um arquivo