const { Comments } = require('../models');

const commentData = [
  {
    user_id: 3,
    post_id: 1,
    comment_text: 'Nice job!',
    comment_date: 'March 10, 2023',
  },
  {
    user_id: 2,
    post_id: 4,
    comment_text: 'I would love to check it out!',
    comment_date: 'March 09, 2023',
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: 'Way to go! Keep it up!',
    comment_date: 'March 12, 2023',
  },
  {
    user_id: 4,
    post_id: 3,
    comment_text: 'I would love to see your routine',
    comment_date: 'March 08, 2023',
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: 'Awesome',
    comment_date: 'March 15, 2023',
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: 'Sounds great',
    comment_date: 'March 18, 2023',
  },
  {
    user_id: 4,
    post_id: 2,
    comment_text: 'Super',
    comment_date: 'March 13, 2023',
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: 'So cool',
    comment_date: 'March 09, 2023',
  },
];


const commentPost = () => Comments.bulkCreate(commentData);

module.exports = commentPost;
