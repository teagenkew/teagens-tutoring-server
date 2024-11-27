import * as keywordController from "../controllers/keywords-controller.js";
import express from "express";
const router = express.Router();

router.route("/keywords").get(keywordController.listAll);

export default router;
