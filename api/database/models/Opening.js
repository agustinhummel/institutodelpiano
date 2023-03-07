"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Opening extends Model {
    static associate(models) {
    }
  }
  Opening.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Opening",
    }
  );
  return Opening;
};