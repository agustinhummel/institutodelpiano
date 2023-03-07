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
      {
        serviceId:2,
        professionalId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:3,
        professionalId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:4,
        professionalId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:5,
        professionalId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:6,
        professionalId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:6,
        professionalId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:6,
        professionalId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:4,
        professionalId:5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:6,
        professionalId:6,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:5,
        professionalId:7,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:5,
        professionalId:8,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:9,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:11,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:12,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:13,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:14,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:2,
        professionalId:15,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:9,
        professionalId:16,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:9,
        professionalId:17,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:9,
        professionalId:18,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:9,
        professionalId:19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        serviceId:11,
        professionalId:20,
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
