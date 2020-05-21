exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('funcionario', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable(); //NotNullAble é q nao pode ser nulo
        table.string('cpf', 11).notNullable(); //11 é o tamanho de caractere
        table.string('idade').notNullable();
        table.string('senha').notNullable();
    });
};

exports.down = function(knex) { //down é tipo se der algum problema oq é pra eu fazer
    return knex.schema.dropTable('funcionario');
};

/*migrations são formas de criar tabelas e manter um historico das tabelas criadas,alteradas*/