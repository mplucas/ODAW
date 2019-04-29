var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou ao servidor localhost!");

});
