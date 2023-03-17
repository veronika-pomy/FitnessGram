const User = require('./users');
const Comments = require('./Comments');
const Posts = require(`./Posts`);

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

module.exports = { User, Comments, Posts };
