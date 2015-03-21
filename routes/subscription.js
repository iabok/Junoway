var express = require('express');
var router = express.Router();
//var db = require('../components/helpers/db_connect');
var Subscription = require('../controllers/subscription');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/subscribe/:category',function(req,res) {
	var form = req.body,
		category = req.params.category;
	new Subscription(req.session).subscribe(form,category,function(err,response){
		if (response.success) {
			res.end(JSON.stringify(response));
		}else if(err){
			console.log('Me');
			res.write(JSON.stringify(err));
			res.end(JSON.stringify(response));
		}else {
			console.log('here');
			res.end(JSON.stringify(response));
		}
	});
});

router.post('/login',function(req,res) {
	var form = req.body;
	var subscription = new Subscription(req.session);

	subscription.signIn(form,function (err,response){
		if (response.success) {
			if (req.cookies.last_visite) {
				res.clearCookie('last_visite');
			}
			res.cookie('last_visite',new Date());
			res.redirect('/');
		}else{
			res.end(JSON.stringify(response.data.message));
		}
	});
});

module.exports = router;
