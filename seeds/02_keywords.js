/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("keywords").del();

  // Inserts sample data
  await knex("keywords").insert([
    { id: 1, keyword: "vector" },
    { id: 2, keyword: "displacement" },
    { id: 3, keyword: "magnitude" },
    { id: 4, keyword: "relative motion" },
  ]);
}
