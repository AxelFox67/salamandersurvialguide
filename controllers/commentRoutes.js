const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all Posts and JOIN with user data
      const commentData = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const comments = commentData.map((comment) => comment.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('comment', { 
        comments, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;