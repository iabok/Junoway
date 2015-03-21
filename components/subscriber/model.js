var mongoose = require('mongoose'),
	crypto 		= require('crypto'),
	uuid 		= require('node-uuid'),
	Schema = mongoose.Schema;

/*
 ** Subscriber Model ==================================================================
 */

var Subscriber = new Schema({
	username	: String,
	category 	: String,
	partners 	: Array,
	security 	: {
		password 	: { type: String, required: true },
		email		: { type: String, required: true },
		salt 		: { type : String, required : true, default : uuid.v1 }
	}
});


mongoose.model('Subscriber',Subscriber);
module.exports = mongoose.model('Subscriber');
