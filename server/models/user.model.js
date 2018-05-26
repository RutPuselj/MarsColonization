const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username: mongoose.SchemaTypes.String,
  level: mongoose.SchemaTypes.Number,
  resources: mongoose.SchemaTypes.Number,
  lastChange: mongoose.SchemaTypes.Date
});

module.exports = mongoose.model('User', user);