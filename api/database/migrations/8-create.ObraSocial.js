'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ObraSocials', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
       type: DataTypes.STRING,
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
    await queryInterface.dropTable('ObraSocials');

 }
};
