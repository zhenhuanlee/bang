var redis = require('redis'),
    client = redis.createClient();

client.on('error', function(err) {
    console.log("redis error" + err);
});

module.exports = client;