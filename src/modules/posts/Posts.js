const mongoose = require("mongoose");

const reqType = { type: mongoose.SchemaTypes.String, required: true };
const postsSchemas = new mongoose.Schema({
  title: reqType,
  description: reqType,
  image: reqType,
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  web_link: reqType,
});

const Posts = mongoose.model("Posts", postsSchemas);

module.exports = Posts;
