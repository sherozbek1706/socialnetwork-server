const { register_users } = require("./_controller");

const router = require("express").Router();

router.post("/users", register_users);

module.exports = router;
