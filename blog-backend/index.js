const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
require("express-async-errors");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize(
  "postgres://postgres:1234@localhost:5432/postgres"
);

const User = require("./models/user")(sequelize, DataTypes);
const Post = require("./models/post")(sequelize, DataTypes);
const Comment = require("./models/comment")(sequelize, DataTypes);

// Associations
User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

require("./startup/routes")(app);
require("./startup/db")(app);