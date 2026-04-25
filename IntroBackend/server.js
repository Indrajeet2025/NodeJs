import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8080;

// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// route
app.get("/", (req, res) => {
  // res.send("Hello from Express Rest API Testing using Postman !");
  // res.send("<h1>Hello Worldd...</h1>");

  res.sendFile(path.join(__dirname, "index.html"));
});

// building rest api for items

app.get("/items", (req, res) => {
  res.send("items list...");
});

app.post("/item/:id", (req, res) => {
  res.send("Post req got....");
});

app.put("/item/:id", (req, res) => {
  res.send("Put req got....");
});

app.delete("/item/:id", (req, res) => {
  res.send("delete req got....");
});

// server start
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
