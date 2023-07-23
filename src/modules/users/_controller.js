const express = require("express");
const registerUsers = require("./register-users");
const loginUser = require("./login-users");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

const register_users = async (req, res, next) => {
  try {
    const result = await registerUsers({ body: req.body });
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

const login_users = async (req, res, next) => {
  try {
    const result = await loginUser({ body: req.body });
    res.status(201).json({
      "access-token": result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register_users,
  login_users,
};
