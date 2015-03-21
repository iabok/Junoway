var Facilitator = function (cnf) {

	this.name	= cnf.name;
	this.category	= cnf.category;
	this.age 	= cnf.age;
	this.email	= cnf.security.email;
	this.license	= cnf.security.license;
	this.address 	= cnf.address;
	this.contact	= cnf.contact;
	this.owner		= cnf.owner;
	this.administrator	= cnf.administrator;
	this.tourist_attraction	= cnf.tourist_attraction;
	this.description	= cnf.description;
	this.profile_picture 	= cnf.profile_picture;
};

Facilitator.prototype.create = function (form,subscriber,callback) {
	var model = require('./model');

	model.findOne({'security.email': form.email},function (err,handle) {
		if (!handle) {

			var newFacilitator = new model({
				_id		: subscriber._id,
				name 		: form.name,
				age 		: form.age,
				security : {
					email 		: form.emial,
					license	: {
						tin			: form.tin,
						number 		: form.license_number,
						issueing_authority 	: form.issueing_authority,
						issueing_date		: form.issueing_date,
						expiry_date 		: form.expiry_date
					}
				},
				address	: {
					country 	: form.country,
					city		: form.city,
					state_district	: form.state_district,
					street_line1	: form.street_line1,
					street_line2	: form.street_line2,
					zip_code		: form.zip_code,
					area_code	: form.area_code,
					postal_code	: form.postal_code
				},
				contact	: {
					website		: form.website,
					mobile_number	: {
						code : form.mobile_code,
						provider : form.mobile_provider,
						number : form.mobile_number
					},
					telephone1	: {
						code : form.telephone1_code,
						providerCode : form.telephone1_provider,
						number : form.telephone1_number
					},
					telephone2	: {
						code : form.telephone2_code,
						provider : form.telephone2_provider,
						number : form.telephone2_number
					},
					fax_number	: {
						code : form.fax_code,
						providerCode : form.fax_provider,
						number : form.fax_number
					}
				},
				owner : {
					title			: form.owner_title,
					first_name 		: form.owner_first_name,
					last_name		: form.owner_last_name,
					middle_name 		: form.owner_middle_name,
					telephone 		: form.owner_telephone,
					email 			: form.owner_email
				},
				tourist_attraction : form.tourist_attraction,
				profile_picture : form.profile_picture,
				description : form.description
			});

			new require('../administrator').create(form,function (err,handle) {
				if (err) {
					callback(err,null)
				}
				else if (handle) {
					newFacilitator.setFacilitator(handle._id);
				}
			});			
		};
	});
};

module.exports = Facilitator;