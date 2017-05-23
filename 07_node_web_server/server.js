const experss = require('express');

var app = experss();

app.get('/', (req, res) => {
  //res.send('<h1>hello express!</h1>');
  res.send({
    name: 'Shailesh',
    likes: [
      'Programming',
      'Gamming'
    ]
  });
});

app.get('/about', (req,res) => {
  res.send('About page');
});

app.listen(3000);
