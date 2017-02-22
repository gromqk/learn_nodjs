var fs = require('fs');

fs.readFile('indexx.html', function (err, data) {
	if(err){
		if(err.code == 'ENOENT'){
			console.error(err.message);
		}else{
			console.error(err);
		}
		return;
	}else {
		console.log(data.toString('utf-8'));
	}
});