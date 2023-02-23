"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Services",
      [{
        name: "test1",
        description:"es una descricion de prueba       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima quis recusandae officia culpa suscipit corporis fuga, eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repellat Lorem ipsum dolor sit amet consectetur adipisicing elit Vero minima quis recusandae officia culpa suscipit corporis fuga eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repella",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "test2",
        description:"es una descricion de prueba       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima quis recusandae officia culpa suscipit corporis fuga, eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repellat Lorem ipsum dolor sit amet consectetur adipisicing elit Vero minima quis recusandae officia culpa suscipit corporis fuga eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repella",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "test3",
        description:"es una descricion de prueba       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima quis recusandae officia culpa suscipit corporis fuga, eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repellat Lorem ipsum dolor sit amet consectetur adipisicing elit Vero minima quis recusandae officia culpa suscipit corporis fuga eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repella",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "test4",
        description:"es una descricion de prueba       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima quis recusandae officia culpa suscipit corporis fuga, eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repellat Lorem ipsum dolor sit amet consectetur adipisicing elit Vero minima quis recusandae officia culpa suscipit corporis fuga eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repella",
        image:["urltest"],
        price: 0.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "test5",
        description:"es una descricion de prueba       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima quis recusandae officia culpa suscipit corporis fuga, eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repellat Lorem ipsum dolor sit amet consectetur adipisicing elit Vero minima quis recusandae officia culpa suscipit corporis fuga eveniet iusto eligendi voluptate necessitatibus facilis facere! Corporis quia error repella",
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
