import express from "express";
import connectDB from "./db.js";
import UserRouter from "./routes/userRoutes.js";

const app = express();
connectDB();

const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Welcome...");
  res.send("Welcome back...");
});

app.use("/api", UserRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
