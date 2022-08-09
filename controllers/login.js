const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    console.log("test");
  });