// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa5c8081a99e5bd2e81575a')},
  //    { $set: { completed: true } },
  //    { returnOriginal: false }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5aa5b4ca03bbaa079c944d80')},
    { 
      $set: {name: "Douglas"},
      $inc: {age: 1}
    },
    { returnOriginal: false }).then((result) => {
      console.log(result);
    });

  //db.close();
});
