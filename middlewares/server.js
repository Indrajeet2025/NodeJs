import express from "express";
import router from "./routes/route.js";

const app = express();
const PORT = 8080;

// middleware
app.use(express.json());

const loginUser = (req, res, next) => {
  console.log("login user");
  next();
};
const authUser = (req, res, next) => {
  console.log("authenticate user");
  let isAuth = true;
  if (isAuth) {
    next();
  } else {
    res.send("failed to authenticate...");
  }
};
const ValidateUser = (req, res, next) => {
  console.log("Validate user");
  next();
};

// app.use(loginUser);
// app.use(authUser);
// app.use(ValidateUser);

app.use("/api", router);

app.get("/", loginUser, authUser, ValidateUser, (req, res) => {
  res.send(`Welcome back...`);
});

app.post("/addStudent", authUser, ValidateUser, (req, res) => {
  res.send(`Welcome student ${req.body.name}`);
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`server runnning on port ${PORT}`);
});
