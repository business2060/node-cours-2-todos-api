const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id='5a902c9186e329402efc3b7cb';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not found');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos : ',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo : ',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo by id : ',todo);
// }).catch((e)=>console.log(e));

User.findById('5a885ccff2444f9816e5f5c7').then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
});
