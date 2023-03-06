"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Professionals",
      [
        {
        fullName: "Miguel Beltran",
        avatar: "https://www.sports-king.com/images/nicknames/lionel-messi.jpg",
        phone: "+57 123467896",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Professionals", null, {});
  },
};
