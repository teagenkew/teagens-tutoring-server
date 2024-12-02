import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getByUnit = async (req, res) => {
  const { unit } = req.params;
  if (!unit) {
    return res
      .status(400)
      .json({ message: "Unit is required in the request body." });
  }
  try {
    const response = await knex("quizzes").select("*").where("unit", unit);
    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: `Unit ${unit} not found.`,
      });
    }
  } catch (err) {
    console.error("Error getting quizzes by unit", err);
    res.status(500).json({ message: "server error getting quizzes. sorry!" });
  }
};

export { getByUnit };
