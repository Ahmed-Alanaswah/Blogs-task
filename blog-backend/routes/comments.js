const { auth } = require("../middleware/auth");
const { validateComment } = require("../middleware/validateComment");
const express = require("express");
const router = express.Router();

const { Comment } = require("../models");
// Add Comment
router.post("/:postId/comments", [auth, validateComment], async (req, res) => {
  const comment = new Comment({
    ...req.body,
    postId: req.params.postId,
    userId: req.user.id,
  });
  await comment.save();
  res.send(comment);
});

module.exports = router;
