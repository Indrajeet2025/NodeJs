import express from "express";

const router = express.Router();

// student  -> student page
// admin   -> admin page

const auth = (req, res, next) => {
  console.log("i am inside auth middleware");

  // create dummy user
  req.user = { userId: 1, role: "student" };

  if (req.user) {
    // if a valid user then proceed to next

    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user..",
    });
  }
};

const isStudent = (req, res, next) => {
  console.log("I am inside student middleware");

  if (req.user.role == "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied,this route is only for student..",
    });
  }
};

const isAdmin = (req, res, next) => {
  console.log("I am inside admin middleware");

  if (req.user.role == "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied,this route is only for admin..",
    });
  }
};

// routes
// student
// admin

router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: "True",
    message: "Success student login..",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: "True",
    message: "Success admin login..",
  });
});

export default router;
