const router = require('express').Router();
const { User } = require('../../models');

// Log in route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect login information, please try again.' });
      return;
    }
    
    // replace with this when password encryption is added
    // const validPassword = await userData.checkPassword(req.body.password);

    var validPassword;
    
    async function checkPassword () {
      if (userData.password === req.body.password) {
        validPassword = true;
      } else {
        validPassword = false;
      }
    }

    await checkPassword ();

    if (validPassword === false) {
      res
        .status(400)
        .json({ message: 'Incorrect login information, please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Sign up route
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Log out route 
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;