const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/dash', dashboardRoutes); // may need to rename later

module.exports = router;