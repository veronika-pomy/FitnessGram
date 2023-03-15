const router = require('express').Router();
const { User, Posts, Comments } = require('../../models');
const withAuth = require('../../utils/auth');
// Add withAuth to all routes

// Will need to check routes and path varibales //

// POST a new post
router.post('/', async (req, res) => {
  try { 
    const newPost = await Posts.create({
        post_content: req.body.post_content,
        post_date: new Date(),
        user_id: req.session.user_id, // replace with req.body to check in insomnia
        // add is_workout variable - checkbox
        // add calories variable
  });
  
  res.status(200).json(newPost);

  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// POST a new comment under specific post
router.post('/post/:id', async (req, res) => {
    try {
      const newComment = await Comments.create({
        comment_text: req.body.comment_text,
        comment_date: new Date(),
        post_id: req.params.id,
        user_id: req.session.user_id, // replace with req.body to check in insomnia
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
});

// route to check workout field - ???
// will need js function to check if it checked - 1, not checked 0

// PUT to update own post
router.put('/post/:id', async (req, res) => {
  try {
    const updatePostData = await Posts.update(
      req.body, // check on this
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    if (!updatePostData) {
      res.status(404).json({ message: 'No post with this id.' });
      return;
    }

    res.status(200).json(updatePostData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE own post
router.delete('/post/:id', async (req, res) => {
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

//                                                       //
// ADDITIONAL if have time                               //
//                                                       //
// PUT to like someone's post -- will need extra col     //
// PUT to like someone's comment -- will need extra col  //
// PUT to edit own comment under someone's post          //
//                                                       //      

module.exports = router;