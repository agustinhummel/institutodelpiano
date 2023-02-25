
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
       type: DataTypes.STRING,
       allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
       },
      image: {
       type: DataTypes.ARRAY(DataTypes.STRING),
       allowNull: false
      },
      autor: {
       type: DataTypes.STRING,
       allowNull: false
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
    await queryInterface.dropTable('Posts');

 }
};