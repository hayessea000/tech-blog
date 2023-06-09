const router = require('express').Router();
const { Comments, User, UserPost } = require('../model');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userPostData = await UserPost.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const userPosts = userPostData.map((userPost) => userPost.get({ plain: true }));
    console.log(userPosts)
    res.render('homepage', { 
      userPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const userPostData = await UserPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    });

    const userPost = userPostData.get({ plain: true });

    const commentData = await Comments.findAll({
      where: {userPost_id: req.params.id},
      include: [{
        model: User,
        attributes: { exclude: ['password'] }
      }]
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comments);

    res.render('post', {
      userPost,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const userPostData = await UserPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    });

    const userPost = userPostData.get({ plain: true });

    const commentData = await Comments.findAll({
      where: {userPost_id: req.params.id},
      include: [{
        model: User,
        attributes: { exclude: ['password'] }
      }]
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comments);

    res.render('dashboardPost', {
      userPost,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
    });

     console.log(userData);
    const user = userData.get({ plain: true });


    if (!userData) {
      res
        .status(400)
        .json({ message: 'No user data found, please log in and try again' });
      return;
    }

    const postData = await UserPost.findAll({
      where: { user_id: req.session.user_id },
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    res.render('dashboard', {
      user,
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
