const router = require('express').Router();
const { User, UserPost } = require('../../model');

router.post('/', async (req, res) => {
  try {
    const newpostData = await UserPost.create({
      title: req.body.title,
      body: req.body.message, 
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletepostData = await UserPost.destroy({
      where:{id: req.params.id}
    });
    res.status(200).json(deletepostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatepostData = await UserPost.update(req.body,{
      where: {id:req.params.id}, 
    });

    res.status(200).json(updatepostData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;