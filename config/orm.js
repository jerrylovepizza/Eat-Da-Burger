// Import Config (MySQL)
// =============================================================
const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

var orm = {

    // Config (ORM CRUD functions)
    // =============================================================
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        console.log("ORM: " + queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log("ORM: " + queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log("ORM: " + queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// Export Config (ORM CRUD functions)
// =============================================================
module.exports = orm;