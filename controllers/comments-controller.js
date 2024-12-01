import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const listbyTopic = async (req, res) => {
  const { topic } = req.params;
  try {
    const comments = await knex("comments").select("*").where("topic", topic);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).send("Server error retrieving comments");
    console.error("Error getting list of all comments by topic :", err);
  }
};

const addComment = async (req, res) => {
  const { topic, username, comment } = req.body;

  if (!topic || !username || !comment) {
    console.log("please help");
    return res.status(400).json({
      message: "`Please provide all required fields: topic, name and comment`",
    });
  }
  try {
    const result = await knex("comments").insert(req.body);
    return res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json({
      message: `Unable to post comment ${err}`,
    });
  }
};

export { listbyTopic, addComment };
