/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("answers").del();

  await knex("answers").insert([
    {
      id: 1,
      question_part_id: 1,
      answer: "3, 4",
      is_correct: 1,
    },
    {
      id: 2,
      question_part_id: 2,
      answer: "0.44 m/s [W]",
      is_correct: 1,
    },
    {
      id: 3,
      question_part_id: 3,
      answer: "0.78 m/s [S 34 W]",
      is_correct: 1,
    },
    {
      id: 4,
      question_part_id: 4,
      answer: "[S 43 E]",
      is_correct: 1,
    },
  ]);
}
