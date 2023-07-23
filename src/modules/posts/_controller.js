const express = require("express");
const postPosts = require("./post-posts");

/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
const post_posts = async (req, res, next) => {
  try {
    const result = await postPosts({ body: req.body });

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
