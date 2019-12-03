var redisClient = require('../lib/redis')
var express = require('express');
var router = express.Router();

// get all comments
router.get('/', function(req, res, next) {
  redisClient.zrange("comments", 0, -1, (err, reply) => {
    if (err) {
      res.send(err);
    } else {
      res.send(reply);
    }
  });
});

router.post('/', function(req, res, next) {
  let content = req.param('content');
  let time = req.param('time');

  redisClient.zadd('comments', content, time)

  res.send(null)
})

module.exports = router;
