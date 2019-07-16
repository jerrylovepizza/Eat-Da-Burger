// Import Config (ORM CRUD functions)
// =============================================================
const orm = require("../config/orm.js");

// Model (burger CRUD model by using ORM logic)
// =============================================================
let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
            console.log("MODEL: orm.all")
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
            console.log("MODEL: orm.create")
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
            console.log("MODEL: orm.update")
        });
    },
};

// Export Model (burger CRUD functions by using ORM logic)
// =============================================================
module.exports = burger;