"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.STRING),
      autor: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Blog",
    }
  );
  return Blog;
};