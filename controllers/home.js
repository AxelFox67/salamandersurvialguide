const express = require('express')
const router = express.Router()

// router.get('/', async (req, res) => {
//     // Send the rendered Handlebars.js template back as the response
//     try {
//         return res.render('home');
//         let userData = {TEST: 'test'};
//         res.status(200).json(userData);
//         console.log("Test");
//       } catch (err) {
//         res.status(500).json(err);
//       }
//   });

  router.get('/', async (req, res) => {
    res.render('home');
  });

module.exports = router ;