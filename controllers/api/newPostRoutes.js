const router = require('express').Router();
const { User, UserPost } = require('../../model');

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newpostData = await UserPost.create({
      title: req.body.title,
      body: req.body.message, 
      user_id: req.session.user_id,
    });

    const newpost = newpostData.get({ plain: true });

    console.log(newpost);

    const postData = await UserPost.findAll({
      include: [{
        model: User,
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']]
      }]
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;