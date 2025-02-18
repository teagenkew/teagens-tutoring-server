/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("question_keywords").del();

  // Insert associations between questions and keywords
  await knex("question_keywords").insert([
    { id: 1, question_id: 1, keyword_id: 1 },
    { id: 2, question_id: 1, keyword_id: 2 },
    { id: 3, question_id: 1, keyword_id: 3 },
    { id: 4, question_id: 2, keyword_id: 4 },
    { id: 5, question_id: 2, keyword_id: 1 },
    { id: 6, question_id: 3, keyword_id: 5 },
    { id: 7, question_id: 3, keyword_id: 5 },
    { id: 8, question_id: 3, keyword_id: 4 },
    { id: 9, question_id: 3, keyword_id: 1 },
    { id: 10, question_id: 4, keyword_id: 1 },
    { id: 11, question_id: 5, keyword_id: 1 },
    { id: 12, question_id: 6, keyword_id: 1 },
    { id: 13, question_id: 7, keyword_id: 1 },
    { id: 14, question_id: 8, keyword_id: 1 },
    { id: 15, question_id: 9, keyword_id: 1 },
    { id: 16, question_id: 10, keyword_id: 1 },
    { id: 17, question_id: 11, keyword_id: 8 },
    { id: 18, question_id: 11, keyword_id: 9 },
    { id: 19, question_id: 12, keyword_id: 8 },
    { id: 20, question_id: 12, keyword_id: 9 },
    { id: 21, question_id: 11, keyword_id: 10 },
    { id: 22, question_id: 12, keyword_id: 10 },
  ]);
}
