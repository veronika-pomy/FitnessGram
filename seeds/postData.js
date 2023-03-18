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
  {
    user_id: 1,
    is_workout: true,
    post_content: 'My new record running time has impoved dramatically after I changed 3 things about my route',
    post_date: 'March 17, 2023',
  },
  { 
    user_id: 2,
    is_workout: false,
    post_content: 'My birthday was yesterday, naturally, I did have the most healthy food. Back on track today!',
    post_date: 'March 20, 2023',
  },
  { 
    user_id: 3,
    is_workout: true,
  post_content: 'Heading to the gym now!',
    post_date: 'March 06, 2023',
  },
  {
    user_id: 4,
    is_workout: false,
    post_content: 'This is my new favorite sports maganize...',
    post_date: 'March 07, 2023',
  },
];

const seedPost = () => Posts.bulkCreate(postData);

module.exports = seedPost;
