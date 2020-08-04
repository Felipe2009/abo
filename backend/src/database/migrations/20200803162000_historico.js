exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('historico', function(table) {
        table.string('name').notNullable();
        table.string('rg').notNullable();
        table.text('tipo').notNullable();
        table.text('sexo').notNullable();
        table.date('dia').notNullable();
        table.text('quantidade').notNullable();
        table.text('condicao').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('historico');
};

//migrations são formas de criar tabelas e manter um historico das tabelas criadas,alteradas(é basicamente um controle de versão do BD)