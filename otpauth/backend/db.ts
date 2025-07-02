import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
});

export const usermodel = mongoose.model("user", userSchema);
