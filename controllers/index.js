const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./home');
const loginRoutes = require('./login');
const profileRoutes = require('./profile');

// router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
