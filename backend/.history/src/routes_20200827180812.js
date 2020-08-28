const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController')
const DoadorController = require('./controllers/DoadorController')
const ListaController = require('./controllers/ListaController')
const ListaFuncionarioController = require('./controllers/ListaFuncionarioController')
const LoginController = require('./controllers/LoginController')
const PrecisaController = require('./controllers/PrecisaController')
const EsperaController = require('./controllers/EsperaController')
const AgendarController = require('./controllers/AgendarController')
const ListaAgendamentoController = require('./controllers/ListaAgendamentoController');
const HistoricoController = require('./controllers/HistoricoController')
const CadastroHistoricoController = require('./controllers/CadastroHistoricoController')
const FluxoController = require('./controllers/FluxoController');
const EstoqueController = require('./controllers/EstoqueController');


const routes = express.Router();
routes.post('/login', LoginController.create); //criando login

//criando rota para listar todas os funcionarios do banco de dados
routes.get('/funcionario', FuncionarioController.index)
routes.post('/funcionario', FuncionarioController.create);
routes.delete('/funcionario/:cpf', FuncionarioController.delete);

routes.get('/agendar', AgendarController.index)
routes.post('/agendar', AgendarController.create)
routes.delete('/agendar/:rg', AgendarController.delete)

routes.post('/historicodoacao', HistoricoController.create)
routes.get('/historicodoacao', HistoricoController.index)
routes.get('/lista', ListaController.index);
routes.get('/listaFuncionario', ListaFuncionarioController.index);
routes.get('/espera', EsperaController.index);
routes.get('/listaAgendamento', ListaAgendamentoController.index)


routes.get('/doador', DoadorController.index);
routes.post('/doador', DoadorController.create);
routes.delete('/doador/:cpf', DoadorController.delete);
routes.put('/doador/:cpf', DoadorController.put);


routes.post('/precisa', PrecisaController.create);
routes.get('/precisa', PrecisaController.index)
routes.delete('/precisa/:rg', PrecisaController.delete);

routes.get('/cadastroHistorico', CadastroHistoricoController.index)
routes.post('/cadastroHistorico', CadastroHistoricoController.create)
routes.delete('/cadastroHistorico/:cpf', CadastroHistoricoController.delete)

routes.get('/fluxo', FluxoController.index)

routes.get('/estoque', EstoqueController.index)
routes.delete('/estoque', EstoqueController.delete)
module.exports = routes; //exportando variavel dentro de um arquivo