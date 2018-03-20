const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

// Todo.findOneAndRemove({
//   _id:'5ab11c27b6fcde97dbd6a718'
// }).then((todo)=>{
//   console.log(todo);
// });


Todo.findByIdAndRemove('5ab11c27b6fcde97dbd6a718').then((todo)=>{
  console.log(todo);
});
