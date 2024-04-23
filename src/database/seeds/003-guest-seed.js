/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('guests').truncate();
  
  // Inserting initial guest records for testing/development
  const initialGuests = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    // Add more initial guests as needed
  ];
  
  // Inserting the initial guest records into the guests table
  await knex('guests').insert(initialGuests);
};
