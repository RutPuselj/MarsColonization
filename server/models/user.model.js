const mongoose = require('mongoose');

const bla = new mongoose.Schema({
	name: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('User', bla);