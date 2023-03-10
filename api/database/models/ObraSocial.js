"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ObraSocial extends Model {
    static associate(models) {
    }
  }
  ObraSocial.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "ObraSocial",
    }
  );
  return ObraSocial;
};