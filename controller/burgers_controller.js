var express = require("express");

var router = express. Router();

//Import burger.js file///
var burger = require("../models/burger.js");

////Setting up the routes////
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
});
});


/////Posting the data/////

router.post('/api/burgers', function (req, res) {
    burger.upDateOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertID});
    });
});









//Export routes for burgers.js to use///

modeule.exports = router;