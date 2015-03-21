var Referral = require('../components/referral');
var referral_model	= require('../components/referral/model');

var Office = function (session) {
	this.ApiResponse	= require('../components/helpers/apiResponse');
	this.ApiMessages	= require('../components/helpers/apiMessages');
	this.session 	= session;
	this.Subscriber	= session.subscriber;
	//this.referrals 	= this.getReferrals();
};

Office.prototype.getReferrals = function(callback) {
	var self = this
	referral_model.find({},function (err,handles) {
		if (err) {
			callback(err,new self.ApiResponse({success: false, data: {message: self.ApiMessages.DB_ERROR}}));
		}else if(handles){
			callback(null,new self.ApiResponse({success: true, data: {referrals: handles}}));	
		}else {
			callback(null,new self.ApiResponse({success: false, data: {message: self.ApiMessages.NOT_FOUND}}));
		}
	});
};

Office.prototype.getReferral = function (_id,callback) {
	var self = this
	referral_model.findById(_id,function (err,handle) {
		if (err) {
			callback(err,new self.ApiResponse({success: false, data: {message: self.ApiMessages.DB_ERROR}}));
		}else if(handle){
			var referral = new Referral(handle);
			callback(null,new self.ApiResponse({success: true, data: {referral: referral}}));	
		}else{
			callback(null,new self.ApiResponse({success: false, data: {message: self.ApiMessages.NOT_FOUND}}));
		}
	});
};

Office.prototype.createReferral = function (form, callback) {
	var self = this;
	new Referral({}).create(form,this.session,function (err,handle) {
		if (err) {
			callback(err,new self.ApiResponse({success: false, data: {message: self.ApiMessages.DB_ERROR}}));
			return;
		}else if (handle) {
			var referral = new Referral(handle);
			callback(err, new self.ApiResponse({success: true, data: {referral: referral}}));
		}else {
			callback(err, new self.apiResponse({success: false, data: {message: self.ApiMessages.NOT_FOUND}}));
		}
	});	
};

Office.prototype.getReferralsSent = function () {
	referrals.filter (function(referral,index,array) {
		return referral.referred_by == Subscriber._id;
	});
};

Office.prototype.getReferralsRecieved = function () {
	referrals.filter (function(referral,index,array) {
		return referral.referred_to == Subscriber._id;
	});
}
/*
var result = $.grep(myArray, function(e){ return e.id == id; });
Office.prototype.getReferralOffered = function (){
	var offered = [];
	var set = false;

	this.referrals.forEach(function(referral,index,array){
		if (referral.referred_to == this.Subscriber._id) {
			offered.push(referral);
		};
		set = true;
	});

	if (set) {
		return offered;
	};
}*/

module.exports = Office;