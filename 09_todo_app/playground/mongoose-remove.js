const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id:'59423f3814e0101b79bc511b'}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('59423f3814e0101b79bc511b').then((result) => {
  console.log(result);
});
