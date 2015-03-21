var Referral = function (cnf) {
	this.type 	= cnf.type;
	this.patient	= cnf.patient;
	this.referred_by	= cnf.referred_by;
	this.referred_to 	= cnf.referred_to;
	this.diagnosis		= cnf.diagnosis;
	this.risk_level		= cnf.risk_level;
	this.test	= cnf.test;
	this.issue	= cnf.issue;
	this.lab_request	= cnf.lab_request;
	this.status	= cnf.status;
	this.date	= cnf.date;	
};

Referral.prototype.create = function (form,session,callback) {
	var newReferral = new require('./model')({
		type	: form.type,
		referred_by	: session.subscriber,
		diagnosis	: form.diagnosis,
		risk_level	: form.risk_level,
		test		: form.test,
		issue		: {
			type	: form.issue_type,
			occurence	: form.issue_occurence,
			reaction	: form.issue_reaction,
			hospitalised: form.hospitalised
		},
		lab_request	: {
			test_type	: form.test_type,
			reason	: form.reuest_reason,
			technology	: form.technology,
			specimen	: {
				collection_mode	: form.collection_mode,
				type 	: form.specimen_type,
				name	: form.specimen_name,
				location: form.specimen_location
			}
		},
		status 	: form.status,
		date	: new Date
	});

	require('../subscriber/model').findOne({username: form.patient},function (err,handle) {
		if (handle) {
			newReferral.setPatient(handle._id);
		};
	});

	require('../subscriber/model').findOne({username: form.referred_to}, function (err,handle) {
		if (handle) {
			newReferral.setReferredTo(handle._id);
		};
	});

	newReferral.save(function (err,handle) {
		callback(err,handle);
	});

};

module.exports = Referral;