module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    content: {
      content: DataTypes.TEXT,
    },
    userId: DataTypes.INTEGER,
  });

  return Post;
};
