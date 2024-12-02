import * as questionController from "../controllers/question-controller.js";
import express from "express";
const router = express.Router();

router.route("/questions").get(questionController.listAll);

router.route("/questions/:keyword").get(questionController.listFromKeyword);

export default router;
