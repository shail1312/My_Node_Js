var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'shail@example.com',
  //   text: 'hey where are you?'
  // });

  socket.emit('createMessage', {
    form: 'Shailesh',
    text: 'Yes, i do it.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email', email);
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
