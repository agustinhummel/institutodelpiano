
'use strict'; 
const { DataTypes } = require('sequelize')

module.exports = {
 up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('serviceProfessionals', {
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Services',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      professionalId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Professionals',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('serviceProfessionals');

 }
};

