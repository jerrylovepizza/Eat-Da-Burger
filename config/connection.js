    
// Config (MySQL)
// =============================================================
require("dotenv").config();
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
        connection = mysql.createConnection({
        host: "localhost",
    
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect();

// Export Config (MySQL)
// =============================================================
module.exports = connection;