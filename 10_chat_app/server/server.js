const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  // socket.emit('newEmail', {
  //   from: 'shail@example.com',
  //   text: 'hey, i am here',
  //   createAt: 123
  // });

  socket.emit('newMessage', {
    from: 'Anurag',
    text: 'See you soon',
    createAt: 123456
  });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage',message);
  });

  socket.on('disconnect', () => {
      console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is running on port 3000');
});
