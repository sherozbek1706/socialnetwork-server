const express = require("express");
const registerUsers = require("./register-users");
const loginUser = require("./login-users");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const register_users = async (req, res) => {
  try {
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

const login_users = async (req, res) => {
  try {
    const result = await loginUser({ body: req.body });
    res.status(201).json({
      login: result,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = {
  register_users,
  login_users,
};
