const express = require("express");
const app = express();
const connectDB = require(`./config/db`);
const productRoutes = require(`./routes/productRoutes`);
const port = process.env.PORT;
app.use(express.json());
require("dotenv").config;

connectDB();

app.get("/", (req, res) => {
  res.sendFile(`index.html`, { root: __dirname });
});
app.use("/api", productRoutes);
app.listen(port, (req, res) => {
  console.log("Emcommerc app listening on port :3000");
});
