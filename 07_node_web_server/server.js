const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>hello express!</h1>');
  res.render('index.hbs',{
    name: 'Shailesh',
    likes: [
      'Programming',
      'Gamming'
    ]
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs',{
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log('Server is on port 3000');
});
