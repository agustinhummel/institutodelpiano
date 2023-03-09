"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ObraSocials",
      [{
        name: "OSDE",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ObraSocials", null, {});
  },
};