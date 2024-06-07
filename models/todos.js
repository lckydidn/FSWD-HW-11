"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    static associate(models) {
      // define association here
    }
  }
  Todos.init(
    {
      title: DataTypes.STRING,
      task: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Todos",
      timestamps: true,
    }
  );
  return Todos;
};
