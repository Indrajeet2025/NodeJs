import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("grocery list...");
});

router.post("/groccery/:id", (req, res) => {
  res.send("Post req got....");
});

router.put("/groccery/:id", (req, res) => {
  res.send("Put req got....");
});

router.delete("/groccery/:id", (req, res) => {
  res.send("delete req got....");
});

export default router;
