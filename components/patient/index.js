function Patient (cnf) {
	this.name 	= cnf.name.first+" "+cnf.name.last;
	this.address= cnf.address;
	this.contact= cnf.contact;
	this.file	= cnf.file;
	this.doctor	= cnf.doctor;
	this.financial	= cnf.financial;
};

module.exports = Patient;