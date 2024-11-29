import * as commentController from "../controllers/comments-controller.js";
import express from "express";
const router = express.Router();

router.route("/comments/:topic").get(commentController.listbyTopic);

export default router;