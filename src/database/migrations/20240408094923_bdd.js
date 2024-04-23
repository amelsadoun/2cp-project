/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {
  await knex.schema.createTable('users', tbl => {
    tbl.increments(); //ID (0 , ...)
    tbl.string('email', 100).notNullable(); 
    tbl.string('phoneNumber', 10).notNullable(); 
    tbl.string('password', 256).notNullable(); 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
  await knex.schema.dropTableIfExists('users');  
};
