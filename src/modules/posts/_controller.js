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
    console.log(req.body);
    console.log(req.file);
    const result = await postPosts({
      body: req.body,
      user_id: req.user.id,
      image: req.file.filename,
    });

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
