var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text:{
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = Todo({
//   text: 'Do homework'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

var newTodo = Todo({
  text: 'Play Football',
  completed: true,
  completedAt:50
});

newTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2) );
}, (e) => {
  console.log('Unable to save todo');
});
