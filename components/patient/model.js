var mongoose 	= require('mongoose'),
	Schema		= mongoose.Schema;

var Patient = new Schema({
	name	: {
		first	: { type: String },
		last	: { type: String },
		middle	: { type: String }
	},
	address	: {
		country		: { type : String, required : true},
		city		: { type : String, required : true},
		zip_code		: Number,
		state_district	: String,
		street_line1	: String,
		street_line2	: String,
		area_code	: Number,
		postal_code	: Number
	},
	contact	: {
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
		}
	},
	financial	: {
		payment_mode	: { type: String },
		account_details	: { type: String },
		financial_preference	: {},
		insurance	: {
			provider	: { type: String },
			cover_name	: { type: String },
			plan_name	: { type: String },
			policy_name	: { type: String },
			policy_number	: { type: String },
			effective_date	: { type: String },
			expiry		: { type: String },
			card_number : { type: String },
			premium_amount	: { type: String }
		}
	},
	file	: { type: Schema.ObjectId, ref: 'Patient_file' },
	doctor	: { type: Schema.ObjectId, ref: 'Subscriber' }
});

Patient.methods.setFile = function(id){
	this.file = id;
};

Patient.methods.setDoctor = function(id){
	this.doctor = id;
};

mongoose.model('Patient',Patient);
module.exports = mongoose.model('Patient');