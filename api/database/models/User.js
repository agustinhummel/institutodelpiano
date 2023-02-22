'use strict';
const { uuid} = require("uuidv4")

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
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'User',
  }),
  User.addHook('beforeSave', async (user) => {
    return user.id = uuid();
  });
  return User;
};