var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 ** Administrator Schema ================================================================
 */
var Administrator = new Schema({
	title 			: String,
	names			: {
		first_name 			: { type : String, required : true},
		last_name 			: { type : String, required : true},
		middle_name 		: String,
	},
	age				: Number,
	sex				: String,
	experience		: String,
	address	: {
		country		: { type : String },
		city		: { type : String, required : true},
		zip_code		: Number,
		area-code	: Number,
		postal_code	: Number,
		state_district	: String,
		street_line1		: String,
		street_line2		: String
	},
	contact : {
		email 			: { type : String, required : true},
		mobile_number	: {
			code : String,
			provider : Number,
			number : Number
		},
		telephone		: {
			code : String,
			provider : Number,
			number : Number
		},
		fax_number		: {
			code 	: String,
			provider	: Number,
			number 	: Number
		},
		online_profile	: String
	},
	security	: {
		email 		: { type : String },
		alt_email 	: String,
		nationality	: String
	}
});

mongoose.model('Administrator',Administrator);
module.exports = mongoose.model('Administrator');