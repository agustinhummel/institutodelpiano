'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
       type: DataTypes.STRING,
      },
      start: {
        type: DataTypes.STRING,
       },
       end: {
         type: DataTypes.STRING,
        },
        description: {
        type: DataTypes.TEXT,
       },
      createdAt: {
         allowNull: false,
         type: Sequelize.DATE
      },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE
      },
       deletedAt: {
         type: Sequelize.DATE
      }

     });
 },

 down: async (queryInterface, Sequelize) => { 
    await queryInterface.dropTable('Events');

 }
};
