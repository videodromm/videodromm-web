var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET communes listing. */
router.get('/', function (req, res) {
	getCommunes(res);
});
function getCommunes(res) {
	fs.readFile('./public/data/communes.json', (err, data) => {
		if (err) return hadError(err, res);
		getTemplate(JSON.parse(data.toString()), res);
	});
}
function getTemplate(communes, res) {
	fs.readFile('./public/html/communes.html', (err, data) => {
		if (err) return hadError(err, res);
		formatHtml(communes, data.toString(), res);
	});
}
function formatHtml(communes, tmpl, res) {
	const html = tmpl.replace('%', communes.join('</li><li>'));
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(html);
}
function hadError(err, res) {
	console.error(err);
	res.end('Server Error');
}

module.exports = router;