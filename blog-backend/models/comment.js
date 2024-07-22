module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: DataTypes.TEXT,

    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });

  return Comment;
};

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: DataTypes.TEXT,

    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, { as: "user" });
    Comment.belongsTo(models.Post, { as: "post" });
  };

  return Comment;
};
