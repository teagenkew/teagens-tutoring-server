/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("comments").del();

  // Inserts sample data
  await knex("comments").insert([
    {
      id: 1,
      topic: "kinematics",
      username: "Alice",
      comment: "Kinematics is fun!",
    },
    {
      id: 2,
      topic: "kinematics",
      username: "Bob",
      comment: "Kinematics is hard!",
    },

  ]);
}
