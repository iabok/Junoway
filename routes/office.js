var express = require('express'),
	router	= express.Router(),
	Office 	= require('../controllers/office');

router.post('/referral',function (req,res) {
	var form = req.body;
	var office = new Office(req.session);
	office.createReferral(form,function (err,handle) {
		if (handle) {
			res.end(JSON.stringify(handle));
		}else{
			res.end(JSON.stringify(err));
		}
	});
});

router.get('/referral/:id',function (req,res) {
	var office = new Office(req.session);
	var _id = req.params.id;
	office.getReferral(_id,function (err,response) {
		if (response.success) {
			res.end(JSON.stringify(response.data.referral));
		}else if (err) {
			res.end(JSON.stringify(err));
		}else{
			res.end(JSON.stringify(response.data.message));
		}
	});
});

router.get('/referrals',function (req,res) {
	var office = new Office(req.session);
	office.getReferrals(function (err,response) {
		if (response.success) {
			res.end(JSON.stringify(response.data.referrals));
		}else if (err) {
			res.end(JSON.stringify(err));
		}else {
			res.end(JSON.stringify(response.data.message));
		}
	});
});

module.exports = router;