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
    {
      "id": 5,
      "question_id": 3,
      "part_label": "a",
      "part_text": "Determine the magnitude and direction of the plane's ground speed.",
      "placeholder": "ex: 260 m/s [S 20 W]"
    },
    {
      "id": 6,
      "question_id": 3,
      "part_label": "b",
      "part_text": "Find the angle the plane makes with the eastward direction.",
      "placeholder": "ex: 15 degrees [direction]"
    },
    {
      "id": 7,
      "question_id": 4,
      "part_label": "a",
      "part_text": "Calculate the horizontal and vertical components of the arrow's velocity.",
      "placeholder": "ex: 50 m/s [horizontal], 30 m/s [vertical]"
    },
    {
      "id": 8,
      "question_id": 5,
      "part_label": "a",
      "part_text": "What is the range of the soccer ball?",
      "placeholder": "ex: 40.8 m"
    },
    {
      "id": 9,
      "question_id": 6,
      "part_label": "a",
      "part_text": "Determine the total displacement of the car.",
      "placeholder": "ex: 72.1 km [N 34 W]"
    },
    {
      "id": 10,
      "question_id": 7,
      "part_label": "a",
      "part_text": "Find the magnitude and direction of the resultant force acting on the object.",
      "placeholder": "ex: 10 N [N 53 E]"
    },
    {
      "id": 11,
      "question_id": 8,
      "part_label": "a",
      "part_text": "What is the bird's total displacement?",
      "placeholder": "ex: 12.2 km [N 23 W]"
    },
    {
      "id": 12,
      "question_id": 9,
      "part_label": "a",
      "part_text": "What is the resultant velocity of the swimmer relative to the ground?",
      "placeholder": "ex: 2.5 m/s [N 37 E]"
    },
    {
      "id": 13,
      "question_id": 10,
      "part_label": "a",
      "part_text": "Calculate the maximum height the ball reaches.",
      "placeholder": "ex: 8 m"
    },
    {
      "id": 14,
      "question_id": 10,
      "part_label": "b",
      "part_text": "Find the time of flight for the ball.",
      "placeholder": "ex: 3.5 s"
    }
  ]);
}
