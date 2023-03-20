const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedComment = require('./commentData');
const seedUser = require('./userData');
const seedCalorie = require('./calorieData');

const seedAll = async () => {
  await sequelize.sync({ force: true});
  await seedUser();
  await seedPost();
  await seedComment();
  await seedCalorie();
  process.exit(0);
};

seedAll();