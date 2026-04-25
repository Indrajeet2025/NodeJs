import express from "express";

const bookRouter = express.Router();
// book
bookRouter.get("/all", (req, res) => {
  res.send("books list...");
});

bookRouter.get("/book/:id", (req, res) => {
  res.send("got book with id  ");
});

bookRouter.post("/book/:id", (req, res) => {
  res.send("Post req got for book....");
});

bookRouter.put("/book/:id", (req, res) => {
  res.send("Put req got book ....");
});

bookRouter.delete("/book/:id", (req, res) => {
  res.send("delete req got....");
});

export default bookRouter;
