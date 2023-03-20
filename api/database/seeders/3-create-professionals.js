"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Professionals",
      [
        {
        fullName: "Administracion",
        avatar: "https://res.cloudinary.com/dc0rv28n2/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1678194067/Instituto%20Delpiano/logoDelpiano_zx8m9p.jpg",
        phone: "+54 3764328203",
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
