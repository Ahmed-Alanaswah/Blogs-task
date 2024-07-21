const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { validateAuth } = require("../middleware/validateAuth");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

router.post("/", validateAuth, async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user) return res.json({ error: "invalid email or password" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ error: "Invalid email or password" });
  }

  const token = jwt.sign(_.pick(user, ["id", "email"]), "secretKey");

  res.header("x-auth-token", token).json(token);

  // res.send({ user: req.user, posts });
  res.send("logged in success");
});

module.exports = router;
