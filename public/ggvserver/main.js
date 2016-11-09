// note, io.listen() will create a http server for you
var io = require('socket.io').listen(1339);

io.sockets.on('connection', function (socket) {


  socket.on('msg', function (msg) {
//console.log(msg)
    // Echo private message only to the client who sent it
socket.broadcast.emit('message', msg);
  });

  socket.on('disconnect', function () {
    // This will be received by all connected clients
    io.sockets.emit('user disconnected');
  });
});

all_active_connections = {};
