import express from "express";

import bookRouter from "./routes/book.js";

import groceryRouter from "./routes/groccerie.js";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("backend started...");
});

app.use("/books", bookRouter);
app.use("/groceries", groceryRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
