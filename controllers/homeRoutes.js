const router = require('express').Router();
// User, post, comment models
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // GET all posts and JOIN with user data
      // const postData = 
  
      // Serialize data for template to read
     //  const posts = posttData.map((post) => post.get({ plain: true }));
  
    // Pass serialized data and session flag into template
    //   res.render('    ', { 
    //     posts, 
    //     logged_in: req.session.logged_in 
    //   });

    } catch (err) {
      res.status(500).json(err);
    }

  });

// route to get a specifc user's profile

// route to get a specifc post
  router.get('/post/:id', async (req, res) => {
    try {
    

    } catch (err) {
      res.status(500).json(err);
    }
  });

// route to leave a comment 

// route to like a post

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/'); // redirect to 'home' or 'dashboard' route 
      return;
    }
  
    res.render('login');
  });
  


module.exports = router;