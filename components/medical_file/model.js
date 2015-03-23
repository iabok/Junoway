var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

var Medical_file = new Schema({
	
	immunisations	: { type: Array },
	chronics	: { type: Array },
	surgeries	: { type: Array }
	admissions	: { type: Array },
	attachments	: {	type: Array }
});