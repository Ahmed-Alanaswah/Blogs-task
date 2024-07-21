const express = require("express");
const commentRouter = require("../routes/comments");
const authRouter = require("../routes/auth");
const postRouter = require("../routes/post");
const profileRouter = require("../routes/profile");
const userRouter = require("../routes/user");
const { error } = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/posts", postRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/comment", commentRouter);
  app.use("/api/profile", profileRouter);
  app.use("/api/user", userRouter);

  app.use(error);
};
