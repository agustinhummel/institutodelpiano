"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    static associate(models) {
    }
  }
  Email.init(
    {
      email: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Email",
    }
  );
  return Email;
};