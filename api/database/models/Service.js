"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {

       Service.belongsToMany(models.Professional, {
        through: "serviceProfessional",
        foreignKey : "serviceId",
        constraints:false
      });
      
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.STRING),
      price: DataTypes.FLOAT
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Service",
    }
  );
  return Service;
};