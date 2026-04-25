import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.URL + "meesho")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
