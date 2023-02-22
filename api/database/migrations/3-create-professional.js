
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professionals', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
       type: DataTypes.STRING,
       allowNull: false
      },
      avatar: {
       type: DataTypes.STRING,
       allowNull: false
      },
      phone: {
        type: DataTypes.STRING
       }, 
      email: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('Professionals');

 }
};

