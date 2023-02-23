'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviceProfessional extends Model {
  };
  serviceProfessional.init({
   serviceId: DataTypes.INTEGER,
   professionalId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'serviceProfessional',
  })
  return serviceProfessional;
};