var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {

      //Check for sesssion
      console.log("1"+JSON.stringify(req.session.subscriber));
      console.log("1"+JSON.stringify(req.cookies.last_visite));
   if(req.session.subscriber){  
      res.end("desination Home");
   }
   else if(req.cookies.last_visite){//check cookie (last_visite)
      console.log("cookie");
      res.redirect('/sign/in.html');
      res.end();
   }
   else{
      console.log('else');
      res.redirect('/home.html');
   }
});

module.exports = router;
