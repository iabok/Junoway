var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Organisation = new Schema({
	
	name		: String,
	age			: String,
	category	: String,
	employer_name	: {
		first 	: String,
		last 	: String,
		middle 	: String
	},
	address		: {
		country		: String,
		city		: String,
		zip_code		: Number,
		state_district	: String,
		street_line1	: String,
		street_line2	: String,
		area_code	: Number,
		postal_code	: Number
	},
	contact		: {
		website 	: String,
		mobile_number	: {
			code 	: String,
			provider 	: Number,
			number 		: Number
		},
		land_line	: {
			code 	: String,
			provider 	: Number,
			number 	: Number
		},
		employer_email	: String,
		fax_number 	: {
			code 	: String,
			provider 	: Number,
			number 	: Number
		}
	},
	tourist_attraction	:  String
});

mongoose.model('Organisation',Organisation);
module.exports = mongoose.model('Organisation');
