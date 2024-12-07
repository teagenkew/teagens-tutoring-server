import "dotenv/config";
import express from "express";
import cors from "cors";
import questionRoutes from "./routes/question-routes.js";
import keywordRoutes from "./routes/keyword-routes.js";
import commentRoutes from "./routes/comments-routes.js";
import quizzesRoutes from "./routes/quizzes-routes.js";
const app = express();

const PORT = process.env.MYSQLPORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/", questionRoutes);
app.use("/", keywordRoutes);
app.use("/", commentRoutes);
app.use("/", quizzesRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
