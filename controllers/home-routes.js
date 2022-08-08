const router = require('express').Router();

router.get('/', (req, res) => {
  //specifies what template we want to use
  res.render('homepage', {
    id: 1,
    post_content: 'Hello world',
    title: 'Title of my blog post',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});

module.exports = router;