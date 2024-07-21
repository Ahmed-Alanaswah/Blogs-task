const { commentSchema } = require("../validaions/validationComment");

const validateComment = async (req, res, next) => {
  try {
    const comment = req.body;

    await commentSchema.validateAsync(comment);

    next();
  } catch (error) {
    if (error.isJoi) {
      return res.status(400).json({ error: error.details[0].message });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { validateComment };
