"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Openings",
      [{
        name: "Profesor de Pilares",
        description: "Se requiere profesor de pilates matriculado y con experiencia comprobable",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Openings", null, {});
  },
};