const express = require("express");
const connectDB = require("./db");
const app = express();
const port = 3000;

// body parser
app.use(express.json());

// connect to db
connectDB();

const route = require("./routes/userRoutes");
app.use("/api", route);

app.get("/", (req, res) => {
  console.log("I am inside home page handler");
  res.send("Hello Saurabh");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
