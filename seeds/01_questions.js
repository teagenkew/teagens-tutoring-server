/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("questions").del();
  await knex("questions").insert([
    {
      id: 1,
      subject: "Physics",
      unit: "Kinematics",
      question_type: "Single Answer",
      question:
        "A child walks 3 meters east and then 4 meters north. Represent their total displacement as a vector and calculate its magnitude.",
    },
    {
      id: 2,
      subject: "Physics",
      unit: "Kinematics",
      question_type: "Single Answer",
      question:
        "A person can swim 0.65 m/s in still water. She heads directly south across a river that is 130 m wide and lands at a point 88m [W] downstream.",
    },
  ]);
}
