/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {
      email: 'seed1test@email.com', 
      phoneNumber: '0668051605', 
      password: 'hehejesperetmchi'
  }
    
  ]);
};
