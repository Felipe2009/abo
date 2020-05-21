exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); //criar chave primaria p/ o id q é autoincrement

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};