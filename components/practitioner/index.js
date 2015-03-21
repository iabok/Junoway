var Practitioner = function (cnf) {

	this.name 	= cnf.security.name;
	this.email 	= cnf.security.email,
	this.license	= cnf.security.license;
	this.personal	= cnf.personal;
	this.address	= cnf.address;
	this.contact 	= cnf.contact;
	this.proffesional 	= cnf.proffesional;
};

Practitioner.prototype.create(form,subscriber,callback){

	var model = require('./model');

	model.findOne({security.email: form.email},function (err,handle) {
		if (!handle) {

			var newPractitioner = new model({
				_id: subscriber._id,
				security	: {
					name	:{
						first 	: form.first_name,
						last 	: form.last_name,
						middles	: form.middle_name
					},
					email 	: form.email,
					license	: {
						number 	: form.license_number,
						issueing_authority	: form.issueing_authority,
						issueing_date 	: form.issueing_date,
						expiry_date 	: form.expiry_date
					}
				},
				personal	: {
					age		: form.age,
					sex		: form.sex,
					nationality	: form.nationality,
					marital_status	: form.marital_status,
					validictory	: form.validictory,
					personal_experience	: form.personal_exprience
				},
				address		:{
					country		: form.country,
					city		: form.city,
					zip_code		: form.zip_code,
					state_district	: from.state_district,
					street_line1	: form.street_line1,
					street_line2	: form.street_line2,
					area_code	: form.area_code,
					postal_code	: form.postal_code
				}, 
				contact		: {
					email	: form.email,
					alt_email	: form.email,
					mobile_number	: {
						code : form.mobile_code,
						provider : form.mobile_provider,
						number : form.mobile_number
					},
					telephone	: {
						code 	: form.telephone_code,
						provider 	: form.telephone_provider,
						number 	: form.telephone_number
					},
					fax_number	: {
						code : form.fax_code,
						provider : form.fax_provider,
						number : form.fax_number
					},
					upin		: form.upin,
					npi		: form.npi
				},
				proffesional	: {
					speciality	: form.speciality
				}
			});

			new require('../organisation').create(form,function (err,handle1) {
				if (err) {
					callback(err,null);
				}else if (handle1) {
					newPractitioner.setOrganisation(handle1._id);
					newPractitioner.save(function (err,handle2) {
						if (err) {
							callback(err,null);
						}else if (handle2) {
							callback(null,handle2)
						};
					})
				}
			});

		};
	});

	
};

module.exports	= Practitioner;