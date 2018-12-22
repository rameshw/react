var express = require('express');
var router = express.Router();
var mymarket = 'au';
var fs = require('fs');
 

/* GET users listing. */
router.get('/', function(req, res, next) {
var market = req.query.market.trim();

// fs.readFile('./routes/links.txt', 'utf8', function(err, contents) {
// 	if(err) throw err;

//     console.log(contents);
// });


// require('fs').readFileSync('/routes/links.txt').toString().split('\n').forEach(function (link) { 
// 	require('fs').readFileSync('/routes/' + link + '.txt').toString().split('\n').forEach(function (line) { 
// 		if(err) throw err;

// 		console.log(link + ","+ line);

//  	});
//  });

if (req.query.market  === mymarket) {
 res.json([
  	{
  		id: 1,
	  	name: "test",
	  	uat : "uatv1",
	  	pilot: "pilotv1",
	  	prod: "prodv1"
	 }, {
	 	id: 2,
	  	name: "test1",
	  	uat : "uatv12",
	  	pilot: "pilotv12",
	  	prod: "prodv12"
  	}]);
} else {
	res.json([
  	{
  		id: 1,
	  	name: "testOthers",
	  	uat : "uatv1",
	  	pilot: "pilotv1",
	  	prod: "prodv1"
	 }, {
	 	id: 2,
	  	name: "testOthers1",
	  	uat : "uatv12",
	  	pilot: "pilotv12",
	  	prod: "prodv12"
  	}]);
}

});

module.exports = router;
