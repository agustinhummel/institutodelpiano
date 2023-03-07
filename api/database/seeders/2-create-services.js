"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Services",
      [
      {
          name: "servico de acompañamiento escolar",
          description:"Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
          image:["https://img.freepik.com/vector-premium/bandera-conceptos-palabra-kinesiologia-monitoreo-muscular-trastornos-movimiento_106317-1548.jpg"],
          price: 1500,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
      },  
      {
        name: "kinesiologia",
        description:"Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        image:["https://img.freepik.com/vector-premium/bandera-conceptos-palabra-kinesiologia-monitoreo-muscular-trastornos-movimiento_106317-1548.jpg"],
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "masaje",
        description:"Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        image:["untest"],
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "hidroterapia",
        description:"Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        image:["https://www.chacarilla.com.pe/wp-content/uploads/2017/07/IMG_5188-1537x1024.jpg"],
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "pilates",
        description:"Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        image:["https://www.feda.net/wp-content/uploads/2016/12/pilates-reformer.jpg"],
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
      {
        name: "Psicologia",
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
