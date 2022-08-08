const router = require('express').Router();

router.get('/', (req, res) => {
  //specefies what template we want to use
  res.render('homepage');
});

module.exports = router;