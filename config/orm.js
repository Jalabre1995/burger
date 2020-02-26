// Import MySQL connection.

var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

///A Helper function to convert bject key/alue pairs to SQL syntax//
function objToSql(ob) {
    var arr = [];

    ///create a loop throught the keys and push the key and value as an integer///
    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf("") >= 0) {
                value = "'"  + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//Object for all our SQL statement functions.

var orm = {
    selectAll: function ( tabbleInput, cb) {
        var queryString = "SELECT * FROM " + tabbleInput + ";";
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
     insertOne: function(table, cols,vals, cb) {
        var queryString = "INSERT INTO" + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ")";
        console.log(queryString);
        connection.query(queryString, vals, function(err, results) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
}









module.exports = orm;