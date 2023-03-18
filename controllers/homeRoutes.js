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
    console.log(req.session.user_id);
    const userCurrentData = await User.findByPk(req.session.user_id, {
  attributes: {
        exclude: ['password']
      },
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

    const user = userCurrentData.get({ plain: true });

    console.log(user);

    res.render('profile', {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a specifc user's profile with posts and comments on them
router.get('/user/:id', async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.params.id, {
      attributes: {
            exclude: ['password']
          },
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
              }]
  });

    const user = userProfile.get({ plain: true });

    console.log(user);

    res.render('user', {
      user,
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
              attributes: ['username', 'id'],
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