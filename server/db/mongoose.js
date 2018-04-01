var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

//mongodb://dougnode:dougnode1@ds135876.mlab.com:35876/heroku-node-todo-api

module.exports = { mongoose };
