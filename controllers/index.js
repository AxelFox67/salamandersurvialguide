const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');
const commentRoutes = require('./commentRoutes');
const resourceRoutes = require('./resourcesRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/comment', commentRoutes);
router.use('/resource', resourceRoutes);

module.exports = router;
