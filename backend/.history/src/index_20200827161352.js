const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/*Request -> guarda os dados da requisição do usuario
  Response é responsável por retornar uma resposta ao usuario */