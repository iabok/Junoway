var model = require('./model');

function Medical_file (cnf) {
	this._id = cnf._id;
	this.immunisations 	= cnf.immunisations;
	this.chronics	= cnf.chronics;
	this.admissions	= cnf.admissions;
	this.surgeries	= cnf.surgeries;
	this.attachments	= cnf.attachments;
};

Medical_file.prototype.addImmunisation = function (immunisation,callback) {
	model.findByIdAndUpdate(this._id,{$push:{immunisations: immunisation}},function (err,handle) {
		if (handle) {
			this.immunisations.push(immunisation);
		};
		callback(err,handle);
	});
};

Medical_file.prototype.addChronic = function (chronic, callback) {
	model.findByIdAndUpdate(this._id,{$push:{chronics: chronic}},function (err,handle) {
		if (handle) {
			this.chronics.push(chronic);
		};
		callback(err,handle);
	});
};

Medical_file.prototype.addAdmission = function (admission, callback) {
	model.findByIdAndUpdate(this._id,{$push}:{admissions: admission},function (err,handle) {
		if (handle) {
			this.admissions.push(admission);
		};
		callback(err,handle);
	})
};
Medical_file.prototype.addSurgeries = function (surgery,callback) {
	model.findByIdAndUpdate(this._id,{$push: {surgeries: surgery}},function (err,handle) {
		if (handle) {
			this.surgeries.push(surgery);
		};
		callback(err,handle);
	});
};
Medical_file.prototype.addAttachment = function (attachment, callback) {
	model.findByIdAndUpdate(this._id,{$push: {attachments: attachment}},function (err,handle) {
		if (handle) {
			this.attachments.push(attachment);
		};
		callback(err,handle);
	});
};