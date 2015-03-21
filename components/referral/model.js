var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

var Referral = new Schema({
	type		: { type: String },
	patient		: { type: Schema.ObjectId, key: 'patient', required: false},
	referred_by	: { type: Schema.ObjectId, key: 'subscriber', required: false},
	referred_to	: { type: Schema.ObjectId, key: 'subscriber', required: false},
	diagnosis 	: { type: String },
	risk_level 	: { type: String },
	test 		: { type: Array },
	issue	 	: { 
		type 	: { type: String },
		occurence	: { type: String },
		complaint	: { type: String },
		reaction	: { type: String },
		vitals		: { type: Array },
		hospitalised: { type: Boolean }//, set: setHospitalised }
	},
	lab_request	: {
		test_type	: { type: String },
		reason		: { type: String },
		technology 	: { type: String },
		specimen	: {
			collection_mode	: { type: String },
			type 	: { type: String },
			name	: { type: String },
			location: { type: String }
		}
	},
	status 		: { type: String, default: 'offer', required: true},
	date 		: { type: Date, required: true }
});
Referral.methods.setPatient = function(patient_id){
	patient = patient_id;
};
Referral.methods.setReferredTo = function (subscriber_id){
	referred_to = subscriber_id;
}; 
var setHospitalised = function (value) {
	if (value == 'true') {
		return true;
	}else {
		return false;
	}

};
mongoose.model('Referral',Referral);
module.exports = mongoose.model('Referral');