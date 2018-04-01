const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5ac13a405c754def9308ac75'}).then((doc) => {

// });

Todo.findByIdAndRemove('5ac13a405c754def9308ac75').then((doc) => {
    console.log(doc);
});
