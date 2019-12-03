var redisClient = require('../lib/redis')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  redisClient.set("hi", "nihao");
  redisClient.get("hi", function(err, reply) {
    console.log(reply);
    res.send(reply.toString());
  });
});

module.exports = router;
