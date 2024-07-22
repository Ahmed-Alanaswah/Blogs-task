"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Step 1: Add the 'password' column with allowNull: true
    await queryInterface.addColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Step 2: Set a default password for existing users
    const defaultPassword = "defaultPassword123"; // Replace with a real default password
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // Update existing rows with the hashed default password
    await queryInterface.sequelize.query(
      `UPDATE "Users" SET "password" = '${hashedPassword}' WHERE "password" IS NULL;`
    );

    // Step 3: Change the 'password' column to allowNull: false
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Step to remove the 'password' column in case of a rollback
    await queryInterface.removeColumn("Users", "password");
  },
};
