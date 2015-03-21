var Subscription = function (session) {
	this.crypto = require('crypto');
	this.uuid	= require('node-uuid');
	this.ApiResponse	= require('../components/helpers/apiResponse');
	this.ApiMessages	= require('../components/helpers/apiMessages');
	this.Subscriber 	= require('../components/subscriber');
	this.SubscriberModel 	= require('../components/subscriber/model');
	this.session	= session;
	//this.mailer		= mailer;
};

Subscription.prototype.getSession = function () {
	return this.session;
};

Subscription.prototype.setSession = function (session) {
	this.session = session;
};

Subscription.prototype.hashPassword = function (password,salt) {
	return this.crypto.createHmac('SHA256', salt).update(password).digest('hex');
};

/*
** Check the license  provided an returns info for auto completion 
*/
Subscription.prototype.checkLicense = function (license_number, callback) {
	mongoose.connection()
	var practitioner  = require('../components/practitioner/model');
	var facilitator  = require('../components/facilitator/model');
};

Subscription.prototype.subscribe = function (form,category,callback) {
	var self = this;
	
	self.SubscriberModel.findOne({'security.email':form.email},function (err,subscriber){

		if (subscriber) {
			console.log('0');
			callback(err,new self.ApiResponse({success: false, data:{message:self.ApiMessages.EMAIL_ALREADY_EXISTS}}));
		}
		else {
			var salt = self.uuid.v1();
			var passwd = form.password;
			passwd = self.hashPassword(passwd,salt);
			var newSubscriber = new self.SubscriberModel({
				username	: form.first_name.concat(" ").concat(form.last_name),
				category	: category,
				security 	: {
					email 	: form.email,
					password: passwd,
					salt 	: salt
				} 
			});


			newSubscriber.save(function (err,handle) {
				if (err) {
					console.log('1');
					callback(err,new self.ApiResponse({success: false, data: {message: self.ApiMessages.DB_ERROR}}));
				}
				else if (handle) {
					var subscriber 	= new self.Subscriber({
						id 		: handle._id,
						email 		: handle.security.email,
						username	: handle.username,
						category	: handle.category
					});

					callback(err, new self.ApiResponse({success: true, data: {subscriber:subscriber}}));
				}
				else {
					callback(err,new self.ApiResponse({success: false, data: {message:self.ApiMessages.COULD_NOT_CREATE_USER}}));
				} 
			});
		}
	});
};

Subscription.prototype.signIn = function (form,callback) {
	var self = this;
	self.SubscriberModel.findOne({'security.email': form.email},function (err,handle) {
		if (err) {
			callback(err,new self.ApiResponse({success: false, data: {message: self.ApiMessages.DB_ERROR}}));
		}
		else if (handle) {
			var passwd = form.password,
				salt = handle.security.salt;
			passwd = 'e004ca86d46161df2ec150da7aace8d5363d9d988d41abb24c3f7b66e6277cdb';//self.hashPassword(passwd,salt);
			if (passwd == handle.security.password) {
				var subscriber = new self.Subscriber({
					_id			: handle._id,
					username	: handle.username,
					email 		: handle.security.email,
					category 	: handle.category
				});

				self.session.subscriber = subscriber;

				callback(err, new self.ApiResponse({success:true, data: {subscriber:subscriber}}));
			}else {
				callback(err, new self.ApiResponse({success: false,data: {message: self.ApiMessages.INVALID_PWD}}));
			}
		}
		else {
			callback(err, new self.ApiResponse({success: false, data: {message: self.ApiMessages.EMAIL_NOT_FOUND}}));
		}
	});
};

Subscription.prototype.signOut = function () {
	if (this.session.subscriber) {
		delete this.session.subscriber;
		return;
	};
};
/*
Subscription.prototype.resetPassword = function (email,callback) {
	var self = this;

	self.SubscriberModel.findOne({'security.email': email},function (err,handle) {
		if (err) {
			callback(err, new self.ApiResponse({success: false, data: {message:self.ApiMessages.DB_ERROR}}));
		}else {
			// Save the subscriber's email and a password reset hash in session. We will use
			var passwordResetHash = self.uuid.v4();
			self.session.passwordResetHash = passwordResetHash;
			self.session.requestingEmail = email;
			self.mailer.sendPasswordResetHash(email,passwordResetHash);

			callback(err,new self.apiResponse({success: true,data: {passwordResetHash:passwordResetHash}}));
		}
	});
};

Subscription.prototype.resetPasswordFinal = function (email,newPassword,passwordResetHash,callback) {
	if (!self.session || !self.session.passwordResetHash) {
		callback(null,new self.apiResponse({success: false, data: {message: self.ApiMessages.PASSWORD_RESET_EXPIRED}}));
	}
	else if (self.session.passwordResetHash !== passwordResetHash) {
		callback(null, new self.apiResponse({success: false, data: {message: self.ApiMessages.PASSWORD_RESET_HASH_MISMATCH}}));
	}
	else if (self.session.requestingEmail !== email) {
		callback(null,new self.apiResponse({success: false,data:{message: self.ApiMessages.PASSWORD_RESET_EMAIL_MISMATCH}}));
	}
	else {
		var passwordSalt = this.uuid.v1();
		self.SubscriberModel.findOne({'security.email': email},function (err,handle) {
			if (err) {
				callback(err, new self.ApiResponse({success: false, data: {message:self.ApiMessages.DB_ERROR}}));
			}
			if (handle) {
				self.SubscriberModel.update({'security.email': email},{'security.password': self.hashPassword(newPassword,handle.security.salt)},function (err,handle1) {
					if (err) {
						callback(err, new self.ApiResponse({success: false, data: {message:self.ApiMessages.DB_ERROR}}));
					}
					else if (handle1) {
						callback(err, new self.apiResponse({success: true, data:null}));
					}
				});		
			};
		});
		
	}
};
*/
module.exports = Subscription;