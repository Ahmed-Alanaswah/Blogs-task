const { auth } = require("../middleware/auth");
const { validatepost } = require("../middleware/validatePost");
const { Post, User, Comment } = require("../models");
const express = require("express");
const router = express.Router();

router.post("/:postId/comments", [auth, validatepost], async (req, res) => {
  try {
    const comment = new Comment({
      ...req.body,
      postId: req.params.postId,
      userId: req.user.id,
    });
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.json(error);
  }
});

router.get("/", [auth], async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, as: "user" },
        { model: Comment, as: "comments" },
      ],
    });
    res.send(posts);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", [auth, validatepost], async (req, res) => {
  try {
    const post = new Post({ ...req.body, userId: req.user.id });
    await post.save();
    res.send(post);
  } catch (error) {}
});
module.exports = router;
