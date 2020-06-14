exports.up = function(knex) { // up é responsavel por criar tabela
    return knex.schema.createTable('doador', function(table) {
        table.increments(); //criar chave primaria p/ o id q é autoincrement
        table.string('cpf').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.date('idade').notNullable();
        table.string('sexo').notNullable();
        table.string('tipo').notNullable();
        table.string('ultima').notNullable();


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('doador');
};

//p/desfazer a ultima migrate:latest -> npx knex migrate:rollback
//migrations são formas de criar tabelas e manter um historico das tabelas criadas,alteradas