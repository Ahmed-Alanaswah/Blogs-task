module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: {
      content: DataTypes.TEXT,
    },
    userId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  });

  return Comment;
};
