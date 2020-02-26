//Import the ORM to have the functions get to the database///

var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
     insertOne: function (burger, cb) {
         orm.insertOne(burger,function(res) {
             cb(res);
         });
     },

     upDateOne: function(cb) {
         orm.upDateOne([id], function(res) {
             cb(res);
         });
     }
};

module.exports = burger;