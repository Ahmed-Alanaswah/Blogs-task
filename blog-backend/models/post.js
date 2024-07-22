module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { as: "user" });
    Post.hasMany(models.Comment, { as: "comments" });
  };

  return Post;
};
