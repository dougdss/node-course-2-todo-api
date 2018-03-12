// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //Users Collection
  // db.collection('Users').deleteMany({name: 'Douglas'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete', err);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5aa5b60a445b1707aabda23a')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
