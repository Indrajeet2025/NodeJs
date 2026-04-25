const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

// routes
// crud for user

router.get("/users", async (req, res) => {
  try {
    // view all users
    console.log("got a get req for users");
    const users = await User.find();
    res.status(200).json({
      success: true,
      user: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

// create user

router.post("/users", async (req, res) => {
  console.log("got a post req for user");
  try {
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
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

module.exports = router;
