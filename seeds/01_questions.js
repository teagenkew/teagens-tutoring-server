/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  // Deletes ALL existing entries
  try {
    console.log("Deleting existing entries...");
    await knex("questions").del();
    console.log("Inserting new entries...");

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
      {
        id: 3,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question:
          "A plane is flying with an airspeed of 250 m/s [E], but a wind is blowing at 50 m/s [N].",
      },
      {
        id: 4,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question:
          "An archer shoots an arrow with a velocity of 60 m/s at an angle of 30° above the horizontal.",
      },
      {
        id: 5,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question:
          "A soccer ball is kicked with an initial velocity of 20 m/s at an angle of 45° to the horizontal.",
      },
      {
        id: 6,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question: "A car travels 60 km [N] and then 40 km [W].",
      },
      {
        id: 7,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question: "Two forces of 8 N [E] and 6 N [N] act on an object.",
      },
      {
        id: 8,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question: "A bird flies 12 km [N] and then 5 km [W].",
      },
      {
        id: 9,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question:
          "A swimmer aims to cross a river 100 m wide, swimming at 2 m/s relative to the water. The river flows at 1.5 m/s [E].",
      },
      {
        id: 10,
        subject: "Physics",
        unit: "Kinematics",
        question_type: "Single Answer",
        question:
          "A ball is thrown with an initial velocity of 15 m/s at an angle of 60° to the horizontal.",
      },
      {
        id: 11,
        subject: "Physics",
        unit: "Uncertainties",
        question_type: "Single Answer",
        question:
          "Consider the following diagram ",
        image_url: "/images/uncertainties/q1.png",
      },
      {
        id: 12,
        subject: "Physics",
        unit: "Uncertainties",
        question_type: "Single Answer",
        question:
          "Consider the following diagram",
        image_url: "/images/uncertainties/q2.png",
      },
    ]);
  } catch (err) {
    console.error("Error during seeding:", err);
  }
}
