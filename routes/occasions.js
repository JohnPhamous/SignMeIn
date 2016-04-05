var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/signmein');

router.get('/', function(req, res) {
    var collection = db.get('occasions');
    collection.find({CreatedBy: "Agustin Balquin"}, function(err, occasion){
        if (err) throw err;
        res.json(occasion);
    });
});

router.get('/', function(req, res) {
    var collection = db.get('occasions');
    collection.find({CreatedBy: "Agustin Balquin"}, function(err, occasion){
        if (err) throw err;
        res.json(occasion);
    });
});

router.post('/', function(req, res){
    var collection = db.get('occasions');
    collection.insert({
        EventID: req.body.EventID,
        Loc: "CSULB",
        CreatedBy: "Agustin Balquin",
        Lat: req.body,
        Long: req.body,
        Range: req.body.Range
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

