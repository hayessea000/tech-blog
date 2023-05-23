const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comments } = require("../../model");


router.post("/", withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const newComment = await Comments.create({
      comment: req.body.comment,
      user_id: req.session.user_id,
      userPost_id: req.body.postIdValue
       
    });
    res.status(200).json(newComment);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

