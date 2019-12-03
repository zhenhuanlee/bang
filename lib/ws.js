const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('ws listen on 8080');

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    ws.send("hi " + message);
  });

  ws.send('welcome');
});