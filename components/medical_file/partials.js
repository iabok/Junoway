function Immunisation (cnf) {
	this.type = cnf.type;
	this.date = cnf.date;
	this.administor	= cnf.administor;
	this.vaccine	= cnf.drug;
};

exports.Immunisation = Immunisation;

function Chronic (cnf) {
	this.type 	= cnf.type;
	this.discovery_date	= cnf.discovery_date;
	this.doctor	= cnf.doctor;
};

exports.Chronic = Chronic;

function Surgery (cnf) {
	this.type 	= cnf.type;
	this.issue	= cnf.issue;
	this.date 	= cnf.date;
	this.facility	= cnf.facility;
};

exports.Surgery	= Surgery;

function Admission (cnf) {
	this.type	= cnf.type;
	this.issue	= cnf.issue;
	this.date 	= cnf.date;
	this.attend_doctor	= cnf.attend_doctor;
	this.facility	= cnf.facility;
};

exports.Admission = Admission;

function Vitals (cnf) {
	this.blood_pressure		= cnf.blood_pressure;
	this.body_temperature 	= cnf.body_temperature;
	this.breathing	= cnf.breathing; 
};

exports.Vitals = Vitals;

function Attachment (cnf) {
	this.category 	= cnf.category;
	this.date 	= cnf.date;
	this.location	= cnf.location;
};

exports.Attachment = Attachment;