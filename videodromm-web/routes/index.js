var express = require('express');
var router = express.Router();
//const fs = require('fs');

router.get('/', function (req, res) {
	res.write('<html><head><script src="https://cdn.socket.io/socket.io-1.4.5.js"></script></head>');
	res.write('<body><img id="target" style="position:fixed;width:100%;height:100%;top:0px;left:0px;  -webkit-app-region: drag;image-rendering: pixelated;">');
res.write('<script>var socket = io(\'http://videodromm.azurewebsites.net:1337\');socket.on(\'connect\', function () { alert(\'connected\') });');
	res.write('var canvas = document.getElementById(\'target\');');
	res.write('socket.on(\'message\', function (data) {canvas.setAttribute("src", data);});socket.on(\'disconnect\', function () { });');
res.write('</script></body></html>');
	//var port = process.env.PORT || 3000;
	res.end(process.env.PORT );
	//getHtmlFromFile(res);
});
function getHtmlFromFile(res) {
	/*fs.readFile('./public/the_force.html', (err, data) => {	
		if (err) return hadError(err, res);
		const html = data.toString();
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	});*/
}
function hadError(err, res) {
	console.error(err);
	res.end('Server Error' + err);
}

module.exports = router;