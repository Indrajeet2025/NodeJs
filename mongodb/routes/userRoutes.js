import User from "../models/User.js";
import express from "express";

const router = express.Router();

// CRUD

// get all users

router.get("/users", async (req, res) => {
  try {
    console.log("getting all users....");
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      success: "false",
      message: "Internal server error...",
    });
  }
});
// get individual user

// create user
router.post("/user", async (req, res) => {
  try {
    const { name, age, mob_no } = req.body;
    const newUser = new User({ name, age, mob_no });
    await newUser.save();

    res.status(200).json({
      success: "true",
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: "false",
      message: error.message,
    });
  }
});

// update user
router.put("/users/:id", async (req, res) => {
  console.log("got a put req for user");
  const { id } = req.params;
  const { name, age, weight } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, weight });
    if (!updatedUser) {
      res.json({
        message: "User not found with this id..",
      });
    }
    res.status(200).json({
      success: true,
      message: "successfully updated user..",
      user: updatedUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

// delete user
router.delete("/users/:id", async (req, res) => {
  console.log("got a delete req for user");
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.json({
        message: "User not found with this id..",
      });
    }
    res.status(200).json({
      success: true,
      message: "successfully deleted user..",
      user: deletedUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
