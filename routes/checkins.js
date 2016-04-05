var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/signmein');

router.get('/', function(req, res) {
    var collection = db.get('checkins');
    collection.find({Name: "John Pham"}, function(err, checkin){
        if (err) throw err;
      	res.json(checkin);
    });
});

router.post('/', function(req, res){
    var collection = db.get('checkins');
    collection.insert({
        EventID : req.body.EventID,
        Name: "John Pham",
        ID:  "861151231", 
        Email: "Jpham@ucr.edu",
        Major: "Electrical Engineering",
        Size: "Medium"
        
    }, function(err, occasion){
        if (err) throw err;

        res.json(occasion);
    });
});

// get and put both access single elements
// router.get('/:id', function(req, res) {
//     var collection = db.get('checkins');
//     collection.findOne({ Name: "Agustin Balquin" }, function(err, checkin){
//         if (err) throw err;

//       	res.json(checkin);
//     });
// });


module.exports = router;


//////////////////////
//////////////////////
////////////////////// GEOLOCATION WORKS THEORETICALLY
//////////////////////