const express = require("express");
const { UnauthorizedError } = require("../errors");
const config = require("../config");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedError("Unauthorized.");
    }
    const decoded = jwt.verify(token, config.JWT.SECRET, {
      ignoreExpiration: false,
    });

    req.user = decoded.user;

    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

module.exports = isLoggedIn;
