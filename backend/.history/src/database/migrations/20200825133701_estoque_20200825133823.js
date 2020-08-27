exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('estoque', function(table) {
        table.text('tipo').notNullable();
        table.text('quantidade').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('estoque');
};

//migrations são formas de criar tabelas e manter um historico das tabelas criadas,alteradas(é basicamente um controle de versão do BD)