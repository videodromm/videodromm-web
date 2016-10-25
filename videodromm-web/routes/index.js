var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res) {
	
	getHtmlFromFile(res);
});
function getHtmlFromFile(res) {
	fs.readFile('./public/the_force.html', (err, data) => {
	
		if (err) return hadError(err, res);
		const html = data.toString();
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	});
}
function hadError(err, res) {
	console.error(err);
	res.end('Server Error' + err);
}

module.exports = router;