var mongoose = require('mongoose');                     // mongoose for mongodb
mongoose.connect('mongodb://localhost:27017');     // connect to mongoDB database on modulus.io
module.exports = mongoose.model('Todo', {
	text : '',
	info : ''
});
