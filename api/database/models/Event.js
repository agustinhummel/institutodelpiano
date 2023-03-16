"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      start: DataTypes.STRING,
      end: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Event",
    }
  );
  return Event;
};