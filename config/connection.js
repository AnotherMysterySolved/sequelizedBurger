// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wgjrwgi7m28u7j8v",
  password: "hu7bhi13mzdoxpmo",
  database: "jvt8l2m1naxhfhd4"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
