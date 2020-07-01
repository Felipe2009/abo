const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ListaController = require('./controllers/ListaController')
const ListaFuncionarioController = require('./controllers/ListaFuncionarioController')
const LoginController = require('./controllers/LoginController')
const PrecisaController = require('./controllers/PrecisaController')
const EsperaController = require('./controllers/EsperaController')


const routes = express.Router();
routes.post('/login', LoginController.create); //criando sessão de login

//criando rota para listar todas os funcionarios do banco de dados
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create);
routes.delete('/funcionario/:cpf', FuncionarioController.delete);


routes.get('/lista', ListaController.index);
routes.get('/listaFuncionario', ListaFuncionarioController.index);
routes.get('/espera', EsperaController.index);


routes.get('/doador', DoadorController.index);
routes.post('/doador', DoadorController.create);
routes.delete('/doador/:cpf', DoadorController.delete);
routes.post('/doador/:cpf', DoadorController.put);



routes.post('/precisa', PrecisaController.create);
routes.get('/precisa', PrecisaController.index)
routes.delete('/precisa/:rg', PrecisaController.delete); //:rg é p/ o q precisa deletar



module.exports = routes; //exportando variavel dentro de um arquivo