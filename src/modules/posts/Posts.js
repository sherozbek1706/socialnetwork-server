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
  webLink: reqType,
});

const Posts = mongoose.Model("Posts", postsSchemas);

module.exports = Posts;
