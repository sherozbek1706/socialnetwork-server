const express = require("express");
const postPosts = require("./post-posts");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const post_posts = async (req, res, next) => {
  try {
    const result = await postPosts({ body: req.body, user_id: req.user.id });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_posts,
};
