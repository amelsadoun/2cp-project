/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('devices').truncate()
  await knex('devices').insert([
    {
      deviceName: "LightSwitch", 
      state:"Off", 
      userID: 1, 
      guestId: null, 
      isGuest: false 
    }
  ]);
};
