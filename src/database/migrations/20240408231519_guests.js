/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {
    const tableExists = await knex.schema.hasTable('guests');
    if (!tableExists) {
        await knex.schema.createTable('guests', tbl => {
            tbl.increments(); //ID
        });
    }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
    await knex.schema.dropTableIfExists('guests');
};

