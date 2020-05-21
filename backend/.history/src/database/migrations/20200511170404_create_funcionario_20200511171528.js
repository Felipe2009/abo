exports.up = function(knex) { // up é responsavel por criar tabela
    knex.schema.createTable('funcionario', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable(); //NotNullAble é q nao pode ser nulo
        table.string('cpf').notNullable();
        table.string('idade').notNullable(); //2 é o tamanho de caractere
        table.string('senha').notNullable();


    });
};

exports.down = function(knex) { //down é tipo se der algum problema oq é pra eu fazer
    knex.schema.dropTable('funcionario');
};