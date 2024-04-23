/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('devices', function(table) {
      table.increments('id').primary();
      table.string('deviceName', 100).notNullable();
      table.string('state', 3).notNullable();
      table.integer('userId');
      table.foreign('userId').references('users.id').onDelete('CASCADE');
      table.integer('guestId');
      table.foreign('guestId').references('guests.id').onDelete('CASCADE');
      table.boolean('isGuest').notNullable(); 
    });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
    await knex.schema.dropTableIfExists('devices');  

};
