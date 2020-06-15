const knex = require('knex'); //importando o knex
const configuration = require('../../knexfile'); //importando as configurações do BD

const connection = knex(configuration.development); //criar conexão e passando a conexao de desenvolv.(q ta no knexfile.js)

module.exports = connection; //exportar nesse arquivo a conexão com o BD