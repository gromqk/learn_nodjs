var url = require('url');
// var debug = require('debug')('server:request');
var log = require('./log')(module);

module.exports = function (req,res) {
	var urlParsed = url.parse(req.url, true);
	
	log.info("Got request", req.method, req.url);

	if(req.method == "GET" && urlParsed.pathname == '/echo' && urlParsed.query.message){
		// res.end(urlParsed.query.message);

		var message = JSON.stringify({
			"success" : true,
			"message" : urlParsed.query.message
		});

		log.debug("Echo: " + message);

		res.end(message);
		return;
	}

	log.error("Неизвестный URL");

	res.statusCode = 404;
	res.end("Not Found");
}