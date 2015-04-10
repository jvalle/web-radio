var express = require('express'),
    fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var filePath = __dirname + '/../Rogue.m4a';
	var stream = fs.createReadStream(filePath);
	var stat = fs.statSync(filePath);

	res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

	stream.pipe(res);
    // res.render('index', { title: 'Express' });
});

module.exports = router;
