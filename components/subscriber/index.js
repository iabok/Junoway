var Subscriber = function(cnf) {
	this._id	= cnf._id;
	this.email 	= cnf.email;
	this.username = cnf.username;
	this.category = cnf.category;
};

module.exports = Subscriber;