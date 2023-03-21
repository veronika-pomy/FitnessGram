const User = require('./users');
const Comments = require('./Comments');
const Posts = require(`./Posts`);
const Calories = require('./Calories');

User.hasMany(Posts, {
  foreignKey: 'user_id',
});

Posts.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
  foreignKey: 'post_id',  
});

Comments.belongsTo(Posts, {
  foreignKey: 'post_id',
});

User.hasMany(Calories, {
  foreignKey: 'user_id',
});

Calories.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Comments, Posts, Calories };
