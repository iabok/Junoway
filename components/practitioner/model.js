var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var Practitioner = new Schema({

	security 	: {
		name 	: {
			first 	: { type : String, required : true },
			last 	: { type : String, required : true },
			middle	: { type:String }
		},
		email 		: String,
		licence	: {
			number 			: {type : String, required : true},
			issueing_authority	: String,
			issueing_date		: Date,
			expiry_date		: Date
		}	
	},
	personal	: {
		age		: Number,
		sex		: String,
		nationality	: String,
		marital_status 	: String,
		validictory 	: String,
		personal_experience	: String
	},
	address 	: {
		country		: { type : String, required : true},
		city		: { type : String, required : true},
		zip_code		: Number,
		state_district	: String,
		street_line1	: String,
		street_line2	: String,
		area_code	: Number,
		postal_code	: Number
	},
	contact 	: {
		email 	: String,
		alt_email	: String,
		mobile_number	: {
			code : String,
			provideCode : Number,
			number : Number
		},
		telephone	: {
			code : String,
			provider : Number,
			number : Number
		},
		fax_number	: {
			code : String,
			provider : Number,
			number : Number
		},
		upin		: Number,
		npi		: Number
	},
	proffesional : {
		organisation : {
			type 	: Schema.ObjectId,
			ref	: 'organisation' 	
		},
		speciality : String 
	}
});

Practitioner.methods.setOrganisation = function (organisation_id) {
	this.proffesional.organisation = organisation_id;
};

mongoose.model('Practitioner', Practitioner);
module.exports = mongoose.model('Practitioner');

