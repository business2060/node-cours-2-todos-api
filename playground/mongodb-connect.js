//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj= new ObjectID();
// console.log(obj);

// var user={name:'Hedi',age:25};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert Todos',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   //_id:123,
  //   name:'Hedi',
  //   age:25,
  //   location:'Tunisia'
  // },(err,result)=>{
  //   if(err){
  //       return console.log('Unable to insert User',err);
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  db.close();
});
