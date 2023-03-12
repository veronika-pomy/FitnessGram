const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}   

Posts.init(
  { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    is_workout: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    //User who made a post
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
      modelName: 'posts' 
    }
);
 
module.exports = Posts;