const { Posts } = require('../models');

const postData = [
  {
    user_id: 1,
    is_workout: true,
    post_content: 'I got a PR on my run today! Ready for this half marathon next month!!',
    post_date: 'March 09, 2023',
  },
  { 
    user_id: 2,
    is_workout: false,
    post_content: 'I had 15% less calories this week than last week!',
    post_date: 'March 12, 2023',
  },
  { 
    user_id: 3,
    is_workout: true,
    post_content: 'I just had the best leg day!',
    post_date: 'March 06, 2023',
  },
  {
    user_id: 4,
    is_workout: false,
    post_content: 'I tried the best dressing recipe today that uses 50% less calories than my go-to. More room for protein!',
    post_date: 'March 07, 2023',
  },
];

const seedPost = () => Posts.bulkCreate(postData);
//random
module.exports = seedPost;
