const { auth } = require("../middleware/auth");
const { Post } = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const posts = await Post.findAll({ where: { userId: req.user.id } });
  res.send({ user: req.user, posts });
});

module.exports = router;
