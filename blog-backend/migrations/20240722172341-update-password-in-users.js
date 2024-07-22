"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Step 1: Set a default password for existing users
    const defaultPassword = "1234"; // Replace with a real default password
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // Update existing rows with the hashed default password
    await queryInterface.sequelize.query(
      `UPDATE "Users" SET "password" = '${hashedPassword}' WHERE "password" IS NULL;`
    );

    // Step 2: Change the 'password' column to allowNull: false
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Step to revert the changes made in up method
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
