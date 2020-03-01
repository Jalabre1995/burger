var express = require("express");

var router = express. Router();

//Import burger.js file///
var burger = require("../models/burger.js");

////Setting up the routes////

router.get("/", function(req,res) {
    res.redirect("burgers")
});


router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        }; 
        console.log(hbsObject);
        res.render("index", hbsObject);
});
});

////Posting the data////
router.post('/burgers/create', function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/burgers');
    });
});



/////Updating the data.///// 

router.put('/burgers/update/:id', function (req, res) {
    burger.upDateOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertID});
    });
});
////Deleteing the burger////
router.delete("/api/burgers/:id", function(req, res){
    var condition = "id =" + req.params.id;
    burger.delete(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})












//Export routes for burgers.js to use///

module.exports = router;