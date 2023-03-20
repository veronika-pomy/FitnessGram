const { User } = require('../models');

const userData = [
  {
    username: 'runner56',
    email: 'runningislife@yahoo.com',
    password: 'marathon',
  },
  { 
    username: 'pizzalover22',
    email: 'pizza@aol.com',
    password: 'password',
  },
  { 
    username: 'gitfit',
    email: 'bodybybob@gmail.com',
    password: 'password123',
  },
  {
    username: 'green_goddess',
    email: 'stacy22@ymail.com',
    password: 'broccoli',
  },
];

const userPost = () => User.bulkCreate(userData, {
  individualHooks: true,
});

module.exports = userPost;