const { post_posts } = require("./_controller");

const router = require("express").Router();

router.post("/posts", post_posts);

module.exports = router;
