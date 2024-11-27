/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("question_keywords").del();

  // Insert associations between questions and keywords
  await knex("question_keywords").insert([
    { question_id: 1, keyword_id: 1 },
    { question_id: 1, keyword_id: 2 },
    { question_id: 1, keyword_id: 3 },
    { question_id: 2, keyword_id: 4 },
    { question_id: 2, keyword_id: 1 },
  ]);
}
