const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('scremeIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  //res.send('<h1>hello express!</h1>');
  res.render('index.hbs',{
    pageTitle: 'Welcome to the express',
    likes: [
      'Programming',
      'Gamming'
    ]
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs',{
    pageTitle: 'About page'
  });
});

app.listen(3000, () => {
  console.log('Server is on port 3000');
});
