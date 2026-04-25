import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  mob_no: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("users", UserSchema);

export default UserModel;
