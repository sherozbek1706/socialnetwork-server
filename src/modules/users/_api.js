const { register_users } = require("./_controller");
const multer = require("multer");
const router = require("express").Router();

router.post("/users", multer().single(), register_users);

module.exports = router;
