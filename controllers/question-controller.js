import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listAll = async (_req, res) => {
  try {
    await knex("questions")
      .select(
        "questions.id",
        "questions.subject",
        "questions.unit",
        "questions.question_type",
        "questions.question",
        "keywords.keyword",
        "question_parts.part_label",
        "question_parts.part_text",
        "question_parts.placeholder",
        "answers.answer",
        "answers.is_correct"
      )
      .leftJoin(
        "question_keywords",
        "questions.id",
        "question_keywords.question_id"
      )
      .leftJoin("keywords", "question_keywords.keyword_id", "keywords.id")
      .leftJoin("question_parts", "questions.id", "question_parts.question_id")
      .leftJoin("answers", "answers.question_part_id", "question_parts.id")

      .then((rows) => {
        const result = [];
        for (const row of rows) {
          const existingIndex = result.findIndex((item) => item.id === row.id);
          if (existingIndex === -1) {
            result.push({
              id: row.id,
              subject: row.subject,
              topic: row.unit,
              questionType: row.question_type,
              question: row.question,
              keywords: [row.keyword],
              parts: {
                [row.part_label]: row.part_text,
              },
              answerPlaceholders: {
                [row.part_label]: row.placeholder,
              },
              answers: {
                [row.part_label]: row.answer,
              },
            });
          } else {
            if (!result[existingIndex].keywords.includes(row.keyword)) {
              result[existingIndex].keywords.push(row.keyword);
            }
            result[existingIndex].parts[row.part_label] = row.part_text;
            result[existingIndex].answers[row.part_label] = row.answer;
            result[existingIndex].answerPlaceholders[row.part_label] =
              row.placeholder;
          }
        }
        res.status(200).json(result);
      });
  } catch (err) {
    res.status(500).send("Server error retrieving questions");
    console.error("Error getting list of all questions:", err);
  }
};

const listFromKeyword = async (req, res) => {
  const { keyword } = req.params;
  
  try {
    await knex("questions")
      .select(
        "questions.id",
        "questions.subject",
        "questions.unit",
        "questions.question_type",
        "questions.question",
        "keywords.keyword",
        "question_parts.part_label",
        "question_parts.part_text",
        "question_parts.placeholder",
        "answers.answer",
        "answers.is_correct"
      )
      .leftJoin(
        "question_keywords",
        "questions.id",
        "question_keywords.question_id"
      )
      .leftJoin("keywords", "question_keywords.keyword_id", "keywords.id")
      .leftJoin("question_parts", "questions.id", "question_parts.question_id")
      .leftJoin("answers", "answers.question_part_id", "question_parts.id")
      .where("keywords.keyword", keyword)

      .then((rows) => {
        const result = [];
        for (const row of rows) {
          const existingIndex = result.findIndex((item) => item.id === row.id);
          if (existingIndex === -1) {
            result.push({
              id: row.id,
              subject: row.subject,
              topic: row.unit,
              questionType: row.question_type,
              question: row.question,
              keywords: [row.keyword],
              parts: {
                [row.part_label]: row.part_text,
              },
              answerPlaceholders: {
                [row.part_label]: row.placeholder,
              },
              answers: {
                [row.part_label]: row.answer,
              },
            });
          } else {
            if (!result[existingIndex].keywords.includes(row.keyword)) {
              result[existingIndex].keywords.push(row.keyword);
            }
            result[existingIndex].parts[row.part_label] = row.part_text;
            result[existingIndex].answers[row.part_label] = row.answer;
            result[existingIndex].answerPlaceholders[row.part_label] =
              row.placeholder;
          }
        }
        res.status(200).json(result);
      });
  } catch (err) {
    res.status(500).send("Server error retrieving questions by keyword");
    console.error(
      `Error getting list of questions with keyword ${keyword}:`,
      err
    );
  }
};
export { listAll, listFromKeyword };
