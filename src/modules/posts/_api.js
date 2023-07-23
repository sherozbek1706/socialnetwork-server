const { post_posts } = require("./_controller");
const uploadImage = require("../../shared/upload/post-image");
const isLoggedIn = require("../../shared/auth/isLoggedIn");
const router = require("express").Router();

const mPostPosts = [isLoggedIn, uploadImage];

router.post("/posts", mPostPosts, post_posts);

module.exports = router;
