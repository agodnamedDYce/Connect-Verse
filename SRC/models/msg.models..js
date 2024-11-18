import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },

  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, 
  },
  
  status: {
    type: String,
    enum: ["sent", "delivered", "read"], 
    default: "sent",
  },

  attachments: [
    {
      type: String, 
    },
  ],
});

const Message = mongoose.model("Message", messageSchema);

export default Message;

