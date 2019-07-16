// Import Model (burger CRUD functions by using ORM logic)
// =============================================================
const burger = require("../models/burger.js");

// Controller (routers)
// =============================================================
const express = require("express");
const router = express.Router();

// get request
router.get("/", function (req, res) {
  // take all MySQL burgers data to html(handlebars) through burger.all model ("SELECT * FROM table")
  // ======== burger.all: function (cb){} ========
  burger.all(function (data) {
    let hbsObject = {
      burgerInDB: data
    };
    console.log("CONTROLLER: GET ", hbsObject);
    res.render("index", hbsObject);
    // (render -- handlebars)
  });
});

// post request
router.post("/api/burgers", function (req, res) {
  // appending new burger data to MySQL burgers through burger.create model("INSERT INTO table (cols) VALUES (vals)")
  // ======== burger.create: function (cols, vals, cb){} ========
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    // Send back the ID of the new quote
    console.log("CONTROLLER: POST ", "\n--burger_name: ", req.body.burger_name, "\n--devoured: ", req.body.devoured, "\n--result: ", result);
    res.json({ id: result.insertId });
  });
});

// put request
router.put('/api/burgers/:id', function (req, res) {
  let idInDB = 'id = ' + req.params.id;

  // update existing burger data in MySQL burgers through burger.update model("UPDATE table SET col = val WHERE id = num")
  // ======== burger.update: function (objColVals, condition, cb) {} ========
  burger.update(req.body, idInDB, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    console.log("CONTROLLER: PUT ", result);
    res.status(200).end();
  });
});

// Export Controller (routers)
// =============================================================
module.exports = router;