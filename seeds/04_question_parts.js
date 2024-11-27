/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("question_parts").del();

  await knex("question_parts").insert([
    {
      id: 1,
      question_id: 1,
      part_label: "a",
      part_text: "Represent their total displacement as a vector.",
      placeholder: "ex: a, b",
    },
    {
      id: 2,
      question_id: 2,
      part_label: "a",
      part_text: "determine the velocity of the water relative to the ground",
      placeholder: "ex: 5 m/s [direction]",
    },
    {
      id: 3,
      question_id: 2,
      part_label: "b",
      part_text: "determine the swimmers velocity relative to the Earth",
      placeholder: "ex: 5 m/s [N 20 W] or 5m/s 20 degrees West of North",
    },
    {
      id: 4,
      question_id: 2,
      part_label: "c",
      part_text:
        "Determine the direction she should swim to land at a point directly south of the starting point ",
      placeholder: "[N 20 W] or 20 degrees West of North",
    },
  ]);
}
