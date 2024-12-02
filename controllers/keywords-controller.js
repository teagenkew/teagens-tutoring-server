import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listAll = async (_req, res) => {
  try {
    const rawKeywords = await knex("keywords").select("keywords.keyword");
    const keywords = rawKeywords.map((word) => word.keyword);
    res.status(200).json(keywords);
  } catch (err) {
    res.status(500).send("Server error retrieving keywords");
    console.error("Error getting list of all keywords:", err);
  }
};

const listByTopic = async (req, res) => {
  const { subject, unit } = req.params;
  if (!subject || !unit) {
    return res
      .status(400)
      .json({ message: "Subject and topic is required in the request body." });
  }
  try {
    const response = await knex("question_keywords")
      .select("questions.subject", "questions.unit", "keywords.keyword")
      .leftJoin("questions", "questions.id", "question_id")
      .leftJoin("keywords", "keywords.id", "keyword_id")
      .where("subject", subject)
      .andWhere("unit", unit);

    const keywordsArray = response.map((item) => item.keyword);
    const uniqueKeywords = [...new Set(keywordsArray)];
    return res.status(200).json(uniqueKeywords);
  } catch (err) {
    res
      .status(500)
      .send("Server error retrieving keywords with subject and topic");
    console.error("Error getting list of keywords:", err);
  }
};
export { listAll, listByTopic };
