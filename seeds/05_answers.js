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
    {
      id: 5,
      question_part_id: 5,
      answer: "255.0 m/s [N 11.3 E]",
      is_correct: 1,
    },
    {
      "id": 6,
      "question_part_id": 6,
      "answer": "11.3 degrees [N of E]",
      "is_correct": 1
    },
    {
      "id": 7,
      "question_part_id": 7,
      "answer": "50 m/s [horizontal], 30 m/s [vertical]",
      "is_correct": 1
    },
    {
      "id": 8,
      "question_part_id": 8,
      "answer": "40.8 m",
      "is_correct": 1
    },
    {
      "id": 9,
      "question_part_id": 9,
      "answer": "72.1 km [N 34 W]",
      "is_correct": 1
    },
    {
      "id": 10,
      "question_part_id": 10,
      "answer": "10 N [N 53 E]",
      "is_correct": 1
    },
    {
      "id": 11,
      "question_part_id": 11,
      "answer": "13 km [N 22.6 W]",
      "is_correct": 1
    },
    {
      "id": 12,
      "question_part_id": 12,
      "answer": "2.5 m/s [N 37 E]",
      "is_correct": 1
    },
    {
      "id": 13,
      "question_part_id": 13,
      "answer": "9.6 m",
      "is_correct": 1
    },
    {
      "id": 14,
      "question_part_id": 14,
      "answer": "2.6 s",
      "is_correct": 1
    }
  ]);
}
