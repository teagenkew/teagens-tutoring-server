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

export { listAll };
