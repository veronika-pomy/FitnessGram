const User = require('./User');
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

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
  foreignKey: 'posts_id',  
}); 

Comment.belongsTo(Posts, {
  foreignKey: 'posts_id',
});

module.exports = { User, Comments, Posts };
