'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      userName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      email: {
       type: DataTypes.STRING,
       allowNull: false
      },
      password: {
       type: DataTypes.STRING,
      },
      level: {
       type: DataTypes.INTEGER,
       defaultValue: 1
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
    await queryInterface.dropTable('Users');

 }
};
