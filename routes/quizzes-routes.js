import * as quizzesController from "../controllers/quizzes-controller.js";
import express from "express";
const router = express.Router();

router.route("/quizzes/:unit").get(quizzesController.getByUnit);

export default router;
