const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
const loginRoutes = require('./login.js');
const profileRoutes = require('./userRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
