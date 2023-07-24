const express = require("express");
const postPosts = require("./post-posts");
const getPosts = require("./get-posts");
const showPosts = require("./show-posts");
const getUsersPosts = require("./get-users-posts");
const Like_usersPosts = require("./like-users-posts");
const LikeUsersPosts = require("./like-users-posts");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const post_posts = async (req, res, next) => {
  try {
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const get_posts = async (req, res, next) => {
  try {
    const result = await getPosts();

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const show_posts = async (req, res, next) => {
  try {
    const result = await showPosts({ param: req.params.id });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const get_usersPosts = async (req, res, next) => {
  try {
    const result = await getUsersPosts({ param: req.params.id });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const like_usersPosts = async (req, res, next) => {
  try {
    const result = await LikeUsersPosts({
      param: req.params.id,
      user_id: req.user.id,
    });

    res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post_posts,
  get_posts,
  show_posts,
  get_usersPosts,
  like_usersPosts,
};
