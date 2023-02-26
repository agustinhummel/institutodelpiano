"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.STRING),
      author: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Post",
    }
  );
  return Post;
};