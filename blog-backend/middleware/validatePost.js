const { postSchema } = require("../validaions/validationPost");

const validatepost = async (req, res, next) => {
  try {
    const post = req.body;

    await postSchema.validateAsync(post);

    next();
  } catch (error) {
    if (error.isJoi) {
      return res.status(400).json({ error: error.details[0].message });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { validatepost };
