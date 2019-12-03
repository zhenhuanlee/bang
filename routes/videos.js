var redisClient = require('../lib/redis')
var express = require('express');
var router = express.Router();

/* GET video list */
router.get('/', function(req, res, next) {
  redisClient.hgetall("videos", function(err, reply) {
    if (err) {
      res.send()
    } else {
      res.send(Object.keys(reply).map(k => {
        return {title: k, url: reply[k]};
      }));
      console.log(typeof reply)
    }
  });
});

module.exports = router;
