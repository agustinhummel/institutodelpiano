"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Services",
      [{
        name: "kinesiologia",
        description:"Servicio de kinesiologia",
        image:["urltest"],
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "masaje",
        description:" Reduce la tensión muscular. Disminuye dolores musculares. Estimula la circulación. Alivia el stress.  Mejora la calidad del sueño. Mejora la movilidad articular. Aumenta la función inmune.",
        image:["urltest"],
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "hidroterapia",
        description:"Piletas hambientas para tratamientos, por favor mayores de 60 años presentar certificado",
        image:["urltest"],
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "pilates",
        description:"Nuevo espacio ambientado para hacer pilates",
        image:["urltest"],
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "gimnasio terapeutico",
        description:"Gimanasio equipado con equipos para realizar actividades fisicas",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "estimulacion temprana",
        description:"Orientado a niños de 0 a 4 años",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "fonoaudiologia",
        description:"es una descricion de prueba ",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "psicopedagogia",
        description:"es una descricion de prueba ",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "medica pediatra",
        description:"es una descricion de prueba ",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
