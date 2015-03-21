var Organisation = function (cnf) {

	this.name		= cnf.name;
	this.age		= cnf.age;
	this.category	= cnf.category;
	this.employer_name	= cnf.employer_name;
	this.address		= cnf.address;
	this.contact		= cnf.contact;
	this.tourist_attraction	= cnf.tourist_attraction;
};

Organisation.prototype.create = function(form,callback) {
	var model = require('./model');

	model.findOne({$and: [{name: orhan_name},{'address.country': form.organ_country}]},function (err,handle) {
		if (handle){
			callback(null,handle);
		}
		if (err) {
			callback(err, null);
		}
		else{
			var newOrganisation = new model({
				name 	: form.organ_name,
				age		: form.organ_age,
				category: form.organ_category,
				employer_name	: {
					first 	: form.employer_first_name,
					last 	: form.employer_last_name,
					middle 	: form.employer_middle_name
				}
				address	: {
					country : form.organ_country,
					city	: form.organ_city,
					zip_code: form.organ_zip_code,
					state_district	: form.organ_state,
					street_line1	: form.organ_street_line1,
					street_line2 	: form.organ_street_line2,
					area_code	: form.organ_area_code,
					postal_code	: form.organ_postal_code
				},
				contact		: {
					website 	: form.organ_website,
					mobile_number	: {
						code 	: form.organ_mobile_code,
						provider 	: form.organ_mobile_provider,
						number 		: form.organ_mobile_number
					},
					telephone	: {
						code 	: form.organ_telephone_code,
						provider 	: form.organ_telephone_provider,
						number 	: form.organ_telephone_number
					},
					employer_email	: form.employer_email,
					fax_number 	: {
						code 	: form.orgna_fax_code,
						provider 	: form.organ_fax_provider,
						number 	: form.organ_fax_number
					}
				},
				tourist_attraction	: form.tourist_attraction
			});

			newOrganisation.save(function (err,handle) {
				callback(err,handle);
			});
		}
	});
};

module.exports = Organisation;