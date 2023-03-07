'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,  
    level: DataTypes.INTEGER,  
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'User',
  })
  return User;
};