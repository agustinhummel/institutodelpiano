"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
        name: "Taller de RCP",
        start: "2023-04-15",
        end: "2023-04-15",
        description: "te invitamos a participar del taller de primero auxilios",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Events", null, {});
  },
};