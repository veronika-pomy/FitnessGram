const router = require('express').Router();
const { User, Posts, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// POST a new comment under specific post
router.post('/post/:id', withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        comment_text: req.body.comment_text,
        comment_date: new Date(),
        post_id: req.params.id,
        user_id: req.session.user_id, 
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
});

// DELETE own post
router.delete('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Posts.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post with this id.' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

module.exports = router;