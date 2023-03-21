const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calories extends Model {}

Calories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //calories
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    //User who's calories are tracked
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        },
    },
  },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'calorie'
    }
);

module.exports = Calories;