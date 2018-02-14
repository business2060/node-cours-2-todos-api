//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

  //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a830d60de2cf11f64f36923')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count : ${count}`);
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find({name:'Hedi'}).count().then((count)=>{
  //   console.log(`Todos count : ${count}`);
  //
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // });
//  db.close();
});
