var Administrator = function (cnf) {
	this.names =  cnf.names;
	this.age	= cnf.age;
	this.sex	= cnf.sex;
	this.experience	= cnf.experience;
	this.address	= cnf.address;
	this.contact	= cnf.contact;
	this.email	= cnf.security.email;
	this.nationality	= cnf.security.nationality;
};

Administrator.prototype.create = function (form,callback) {
	var model = require('./model');
	new modela({
		title 			: form.title,
		names			: {
			first_name 			: form.first_name,
			last_name 			: form.last_name,
			middle_name 		: form.middle_name,
		},
		age				: form.admin_age,
		sex				: form.sex,
		experience		: form.experience,
		address	: {
			country		: form.admin_country,
			city		: form.admin_city,
			zip_code	: form.admin_zip_code,
			area_code	: form.amdin_area_code,
			postal_code	: form.admin_postal_code,
			state_district	: form.admin_state,
			street_line1		: form.admin_street_line1,
			street_line2		: form.admin_street_line2
		},
		contact : {
			email 			: form.admin_email,
			mobile_number	: {
				code : form.admin_mobile_code,
				provider : form.admin_mobile_provider,
				number : form.admin_mobile_number
			},
			telephone		: {
				code : form.admin_tel_code,
				provider : form.admin_tel_provider,
				number : form.admin_tel_number
			},
			fax_number		: {
				code 	: form.admin_fax_code,
				provider	: form.admin_fax_provider,
				number 	: form.admin_fax_number
			},
			online_profile	: form.online_profile
		},
		security	: {
			email 		: form.admin_email,
			alt_email 	: form.admin_alt_email,
			nationality	: form.admin_nationality
		}
	});
}

module.exports = Administrator;