"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Professionals",
      [{
        id: 1,
        fullName: "Miguel Beltran",
        email: "miguel@admin.com",
        avatar: "urlTest",
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
