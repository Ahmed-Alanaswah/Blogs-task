const { auth } = require("../middleware/auth");
const { validatepost } = require("../middleware/validatePost");
const { Post, User, Comment } = require("../models");
const express = require("express");
const router = express.Router();

router.post("/:postId/comments", [auth, validatepost], async (req, res) => {
  const comment = new Comment({
    ...req.body,
    postId: req.params.postId,
    userId: req.user.id,
  });
  await comment.save();
  res.send(comment);
});

router.get("/", [auth, validatepost], async (req, res) => {
  const posts = await Post.findAll({ include: [User, Comment] });
  res.send(posts);
});

router.post("/", [auth, validatepost], async (req, res) => {
  const post = new Post({ ...req.body, userId: req.user.id });
  await post.save();
  res.send(post);
});
module.exports = router;
