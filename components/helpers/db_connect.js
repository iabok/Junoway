var mongoose = require('mongoose');

mongoose.createConnection("mongodb://localhost/junoway");

module.exports = mongoose.connection;