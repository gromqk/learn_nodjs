var http = require('http');
var fs = require('fs');

// 1. Блокирует => используется там где нет параллелизма
// 2. Работает try..catch
// 3. Прост и понятен всем

var server = http.createServer(function (req, res) {
	var info;

	if (req.url == '/') {
		try {
			info = fs.readFileSync('index.html');
		} catch(err) {
			console.error(err);
			res.statusCode = 500;
			res.end("На сервере произошла ошибка.");	
			return;
		}
		res.end(info);
	}else{
		res.statusCode = 404;
		res.end('Not Found!!!');
	}
}).listen(3000);

