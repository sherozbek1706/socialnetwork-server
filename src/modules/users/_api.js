const { register_users, login_users } = require("./_controller");
const multer = require("multer");
const router = require("express").Router();

router.post("/register", multer().single(), register_users);
router.post("/login", multer().single(), login_users);

module.exports = router;
