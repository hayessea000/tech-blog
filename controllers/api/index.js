const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const newPostRoutes = require('./newPostRoutes');


router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/newpost', newPostRoutes);


module.exports = router;
