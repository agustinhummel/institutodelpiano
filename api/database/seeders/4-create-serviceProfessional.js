"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "serviceProfessionals",
      [{
        serviceId:1,
        professionalId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },

      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("serviceProfessionals", null, {});
  },
};
