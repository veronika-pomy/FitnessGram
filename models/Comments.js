const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //the comment
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //date comment was made
    comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    //User who commented
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        },
    },
    //Post where comment lives
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
        },
    },
  },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
);

module.exports = Comments;