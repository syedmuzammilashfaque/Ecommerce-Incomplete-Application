// Models (Collections)
import mongoose from "mongoose";

// Schema
const postSchema = mongoose.Schema({
  name: String,
  title: String,
  description: String,
  category: String,
  price: Number,
  images: [String],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Model (Collection)
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
