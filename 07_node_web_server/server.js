const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// });

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

app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
