'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    static associate(models) {
      Professional.belongsToMany(models.Service, {
        through: "serviceProfessional",
        foreignKey : "professionalId",
        constraints:false
      });
    }
  };
  Professional.init({
    fullName: DataTypes.STRING,
    avatar:DataTypes.STRING,
    phone: DataTypes.STRING  
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Professional',
  })
  return Professional;
};