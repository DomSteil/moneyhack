// Twilio Credentials 
var accountSid = 'AC4b074c6bc47b52e8e1534cced203179d'; 
var authToken = '0f89aa36696f0a5544c94ae777cdb3d8'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
	to: "+16502073177", 
	from: "+16505626071", 
	body: "Dom, watup ",   
}, function(err, message) { 
	console.log(message.sid); 
});