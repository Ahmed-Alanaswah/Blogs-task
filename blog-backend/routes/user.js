const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { validateAuth } = require("../middleware/validateAuth");

router.post("/", validateAuth, async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });
    if (existingUser) {
      return res.status(400).json("User already registered");
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createdUser = await User.create({
      ...userData,
      password: hashedPassword,
    });
    res.json(_.pick(createdUser, ["id", "email"]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
