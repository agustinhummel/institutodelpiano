"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [{
        userName: "Admin",
        email: "admin@admin.com",
        password: "$2b$10$058rWWyQIDvjjHZcW8JtbeGLnWdqaOeQV71upF.baS/sYrVFLDovW",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
