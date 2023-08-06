const express = require("express");
const registerUsers = require("./register-users");
const loginUser = require("./login-users");
const getUsers = require("./get-users");
const httpValidator = require("../../shared/http-validator");
const { RegisterUserSchema, LoginUserSchema } = require("./_schemas");
const ForgotPasswordUser = require("./forgot-password");
const showUsers = require("./show-users");
/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */

const register_users = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, RegisterUserSchema);
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
    httpValidator({ body: req.body }, LoginUserSchema);
    const result = await loginUser({ body: req.body });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// const forgot_passwordUsers = async (req, res, next) => {
//   try {
//     const result = await ForgotPasswordUser({ body: req.body });
//     res.status(201).json({
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const get_users = async (req, res, next) => {
  try {
    const result = await getUsers();

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const show_users = async (req, res, next) => {
  try {
    let result;
    if (req.params.id == "me") {
      result = await showUsers({ params: req.user });
    } else {
      result = await showUsers({ params: req.params });
    }

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register_users,
  login_users,
  // forgot_passwordUsers,
  get_users,
  show_users,
};
