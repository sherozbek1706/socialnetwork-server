const mongoose = require("mongoose");

const reqType = { type: mongoose.SchemaTypes.String, required: true };
const postsSchemas = new mongoose.Schema(
  {
    title: reqType,
    description: reqType,
    image: reqType,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Users",
    },
    web_link: reqType,
    like: {
      type: mongoose.SchemaTypes.Number,
      default: 0,
    },
    view: {
      type: mongoose.SchemaTypes.Number,
      default: 0,
    },
    likedUsers: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Users",
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Posts = mongoose.model("Posts", postsSchemas);

module.exports = Posts;
