const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5940dabaa570e71e7723fac11';
//
// if(!ObjectId.isValid(id)) {
//   console.log('Id not valid');
// }
//
// // Todo.find({
// //  _id:id
// // }).then((todos) => {
// //  console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //  _id:id
// // }).then((todo) => {
// //  console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//  console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));

User.findById('593eb18402c83115839352b2').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
