const router = require('express').Router();
const { User, Posts, Comments } = require('../models');
const withAuth = require('../utils/auth');
// Add withAuth to all routes

// GET all users' posts with comments on them
router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comments,
        include: [
          {
            model: User,
            attributes: ['username'],
          }, 
        ], 
      },
    ],
  });

  const posts = postData.map((post) => post.get({ plain: true }));

  console.log(posts);

  res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn,
  });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET logged in users' posts with comments on them
router.get('/profile', async (req, res) => {
  try {
    const userCurrentData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password', 
                  'id', 
                  'email']},
        include: [
          { 
            model: Posts,
             include : [
              { model: Comments,
                include: [
                  {
                    model: User,
                    attributes: ['username'],
                  }, 
                ], 
              }
            ],
          }],
        });

    const userCurrent = userCurrentData.get({ plain: true });

    console.log(userCurrent);

    res.render('profile', {
      userCurrent,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a specifc user's profile with posts and comments on them
// Not sure about this one
router.get('/user/:id', async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.session.user_id, {

    });

    const userProfileData = userProfile.get({plain: true });

    console.log(userProfileData);

    res.render('user', {
      userProfileData,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a specifc post and comments on it
router.get('/post/:id', async (req, res) => {
  try {
      const postData = await Posts.findByPk(req.params.id, {
          include: [
            {
              model: Comments,
              include: [
                {
                  model: User,
                  attributes: ['username'],
                },
              ],
            },
            {
              model: User,
              attributes: ['username'],
            },
          ],
      });

      const post = postData.get({ plain: true });

      console.log(post);

      res.render('post', { post, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup'); 
});
  
module.exports = router;