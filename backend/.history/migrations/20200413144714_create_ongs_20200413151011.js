exports.up = function(knex) { // up é responsavel por criar tabela
    knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //2 é o tamanho de caractere

    });
};

exports.down = function(knex) { //down é tipo se der algum problema oq é pra eu fazer
    knex.schema.dropTable('ongs');
};