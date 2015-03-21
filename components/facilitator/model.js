var mongoose 	= require('mongoose'),
	Schema		= mongoose.Schema;
/*
 ** Facilitator Schema =================================================================
 */

 var Facilitator = new Schema({

	name 		: String,
	category	: String,
	age 		: String,

	security : {
		email 		: String,
		licence	: {
			tin			: String,
			number 		: { type : String, required : true},
			issueing_authority 	: { type : String, required : true},
			issueing_date		: Date,
			expiry_date 		: Date
		}
	},
	address	: {
		country 	: { type : String },
		city		: { type : String, required : true},
		state_district	: String,
		streetLine1	: String,
		streetLine2	: String,
		zipCode		: Number,
		areaCode	: Number,
		postalCode	: Number
	},
	contact	: {
		website		: String,
		mobileNumber	: {
			code : String,
			providerCode : Number,
			number : Number
		},
		telephone1	: {
			code : String,
			providerCode : Number,
			number : Number
		},
		telephone2	: {
			code : String,
			providerCode : Number,
			number : Number
		},
		faxNumber	: {
			code : String,
			providerCode : Number,
			number : Number
		}
	},
	owner : {
		title			: String,
		first_name 		: String,
		last_name		: String,
		middle_name 		: String,
		telephone 		: Number,
		email 			: String
	},
	administrator 	: {
		type	: Schema.ObjectId,
		ref 	: 'administrator'
	},
	tourist_attraction : String,
	profile_picture : String,
	description : String
});

Facilitator.methods.setAdministrator = function(administrator){
	this.administrator = administrator._id;
};

mongoose.model('Facilitator', Facilitator);
module.exports = mongoose.model('Facilitator');
