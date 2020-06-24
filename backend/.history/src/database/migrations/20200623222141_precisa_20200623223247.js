exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('precisa', function(table) {
        table.text('telefone').notNullable();
        table.string('name').notNullable();
        table.string('rg').notNullable();
        table.string('quantidade').notNullable();
        table.date('idade').notNullable();
        table.text('tipo').notNullable();
        table.text('sexo').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('precisa');
};

//migrations são formas de criar tabelas e manter um historico das tabelas criadas,alteradas(é basicamente um controle de versão do BD)