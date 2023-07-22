const express = require("express");
const registerUsers = require("./register-users");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const register_users = async (req, res) => {
  try {
    console.log(req);
    const result = await registerUsers({ body: req.body });
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = {
  register_users,
};
