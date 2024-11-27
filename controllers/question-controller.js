import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listAll = async (_req, res) => {
  try {
    const rawQuestions = await knex("questions")
      .select(
        "questions.id",
        "questions.subject",
        "questions.unit",
        "questions.question_type",
        "questions.question",
        "keywords.keyword",
        "question_parts.part_label",
        "question_parts.part_text"
      )
      .leftJoin(
        "question_keywords",
        "questions.id",
        "question_keywords.question_id"
      )
      .leftJoin("keywords", "question_keywords.keyword_id", "keywords.id")
      .leftJoin("question_parts", "questions.id", "question_parts.question_id");

    const questionMap = new Map();

    rawQuestions.forEach((row) => {
      if (!questionMap.has(row.id)) {
        questionMap.set(row.id, {
          id: row.id,
          subject: row.subject,
          unit: row.unit,
          question_type: row.question_type,
          question: row.question,
          keywords: new Set(),
          parts: {},
        });
      }

      const question = questionMap.get(row.id);
      if (row.keyword) question.keywords.add(row.keyword);
      if (row.part_label && row.part_text) {
        question.parts[row.part_label] = row.part_text;
      }
    });

    const questionData = Array.from(questionMap.values()).map((question) => ({
      ...question,
      keywords: Array.from(question.keywords), // Convert Set to Array
    }));

    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).send("Server error retrieving questions");
    console.error("Error getting list of all questions:", err);
  }
};

export { listAll };
