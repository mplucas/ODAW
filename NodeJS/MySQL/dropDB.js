var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou ao servidor localhost!");

  // mostrando todos os dbs
  con.query("SHOW DATABASES", function (err, result, fields) {
    if (err) throw err;
    console.log("DBs antes do drop:")
    console.log(result);
  });

  // dropa tabela teste
  var sql = "DROP DATABASE exNode";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("DB exNode dropado");
  });

  // mostrando todos os dbs
  con.query("SHOW DATABASES", function (err, result, fields) {
    if (err) throw err;
    console.log("DBs depois do drop:")
    console.log(result);
  });

});
