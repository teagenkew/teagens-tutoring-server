import * as questionController from "../controllers/question-controller.js";
import express from "express";
const router = express.Router();

router.route("/questions").get(questionController.listAll);

export default router;
