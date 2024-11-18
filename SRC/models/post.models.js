import mongoose from "mongoose";

// Define Post Schema
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  image: {
    type: String, 
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },

  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User", 
    default: [],
  },

  comments: [
    {
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
