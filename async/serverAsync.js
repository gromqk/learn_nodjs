var http = require('http');
var fs = require('fs');

// 1. Не блокирует
// 2. Не работает try..catch => callback(err)
// 3. Сложнее (есть способы упростить себе жизнь)

var server = http.createServer(function (req, res) {
	var info;

	if (req.url == '/') {
		fs.readFile('index.html', function (err, info) {
			if(err){
				console.error(err);
				res.statusCode = 500;
				res.end("На сервере произошла ошибка.");	
				return;
			}
			res.end(info);
		});
	}else{
		res.statusCode = 404;
		res.end('Not Found!!!');
	}
}).listen(3000);