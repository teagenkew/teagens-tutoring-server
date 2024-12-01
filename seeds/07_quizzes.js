/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("quizzes").del();

  // Inserts sample data
  await knex("quizzes").insert([
    {
      id: 1,
      quiz_name: "vectors",
      unit: "kinematics",
    },
    {
      id: 2,
      quiz_name: "projectile-motion",
      unit: "kinematics",
    },
  ]);
}
