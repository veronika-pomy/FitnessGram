const { Calories } = require('../models');

const caloriesData = [
  {
    calories: 2300,
    user_id: 4,
  },
  {
    calories: 2800,
    user_id: 4,
  },
  {
    calories: 2700,
    user_id: 4,
  },
  {
    calories: 2300,
    user_id: 4,
  },
  {
    calories: 2200,
    user_id: 4,
  },
  {
    calories: 2200,
    user_id: 4,
  },
  {
    calories: 2600,
    user_id: 4,
  },
  {
    calories: 2900,
    user_id: 4,
  },
  {
    calories: 2500,
    user_id: 4,
  },
  {
    calories: 2600,
    user_id: 4,
  },
  {
    calories: 2600,
    user_id: 4,
  },
  {
    calories: 2400,
    user_id: 4,
  },
  {
    calories: 2300,
    user_id: 4,
  },
  {
    calories: 2900,
    user_id: 4,
  },
];

const calories = () => Calories.bulkCreate(caloriesData);

module.exports = calories;
