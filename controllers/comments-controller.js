import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listbyTopic = async (req, res) => {
  const { topic } = req.params;
  try {
    const comments = await knex("comments")
      .select("*")
      .where("topic", topic);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).send("Server error retrieving comments");
    console.error("Error getting list of all comments by topic :", err);
  }
};

export { listbyTopic };
