const router = require('express').Router();
// const { User } = require('../../models');

// Log in route

// Sign up route

// Log out route 
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;