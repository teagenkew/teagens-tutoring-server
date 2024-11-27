import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listAll = async (_req, res) => {
  try {
    const allQuestions = await knex("questions")
      .select(
        "questions.id",
        "questions.subject",
        "questions.unit",
        "questions.question_type",
        "questions.question",
        knex.raw("JSON_ARRAYAGG(keywords.keyword) AS keywords")
      )
      .leftJoin(
        "question_keywords",
        "questions.id",
        "question_keywords.question_id"
      )
      .leftJoin("keywords", "question_keywords.keyword_id", "keywords.id")
      .groupBy("questions.id");

    const questionData = allQuestions.map((question) => ({
      id: question.id,
      subject: question.subject,
      unit: question.unit,
      question_type: question.question_type,
      question: question.question,
      keywords: question.keywords || [],
    }));

    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).send(`Server error retrieving questions`);
    console.error("Error getting list of all questions:", err);
  }
};

export { listAll };
