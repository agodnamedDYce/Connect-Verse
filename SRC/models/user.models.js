import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  loginID: {
    type: String,
  },

  lastName: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    unique: true,
    required: true,
    enum: ["Male", "Female", "male", "female"],
  },

  nationality: {
    type: String,
    required: true,
  },

  followers: {
    type: [String],
    count: 0,
    default: [],
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  following: {
    type: [String],
    count: 0,
    default: [],
  },

  bio: {
    required: false,
    type: String,
  },

  age: {
    required: true,
    type: String,
  },

  otp: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
