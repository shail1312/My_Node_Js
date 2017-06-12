var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = Todo({
//   text: 'Play Football',
//   completed: true,
//   completedAt:50
// });

// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2) );
// }, (e) => {
//   console.log('Unable to save todo');
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: 'shail1312@hotmail.com   '
});

user.save().then((doc)=> {
  console.log('User saved',doc);
}, (e) => {
  console.log('Unable to save the user',e);
});
