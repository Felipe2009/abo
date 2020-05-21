exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //2 é o tamanho de caractere

    });
};

exports.down = function(knex) { //down é tipo se der algum problema oq é pra eu fazer
    knex.schema.dropTable('ongs');
};