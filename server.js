// express
// =============================================================
const express = require('express');
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// handlebars
// =============================================================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes (import)
// =============================================================
const routes = require("./controllers/burgers_controller.js")
app.use(routes);

// port
// =============================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log("PORT: " + PORT);
});