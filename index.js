import "dotenv/config";
import express from "express";
import cors from "cors";
import questionRoutes from "./routes/question-routes.js";
import keywordRoutes from "./routes/keyword-routes.js";
import commentRoutes from "./routes/comments-routes.js";
import quizzesRoutes from "./routes/quizzes-routes.js";
const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/", questionRoutes);
app.use("/", keywordRoutes);
app.use("/", commentRoutes);
app.use("/", quizzesRoutes);

app.get("/test", (req, res) => {
  res.send("server is running");
});

console.log("MYSQLHOST:", process.env.MYSQLHOST);
console.log("MYSQLUSER:", process.env.MYSQLUSER);
console.log("MYSQLDATABASE:", process.env.MYSQL_DATABASE);
console.log("MYSQLPORT:", process.env.MYSQLPORT);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
