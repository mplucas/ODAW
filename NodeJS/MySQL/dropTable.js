var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123",
  database: "exNode"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou ao servidor localhost!");

  // mostrando todas as tabelas de exNode
  con.query("SHOW TABLES", function (err, result, fields) {
    if (err) throw err;
    console.log("Tabelas antes do drop:")
    console.log(result);
  });

  // dropa tabela teste
  var sql = "DROP TABLE teste";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela teste dropada");
  });

  // mostrando todas as tabelas de exNode
  con.query("SHOW TABLES", function (err, result, fields) {
    if (err) throw err;
    console.log("Tabelas depois do drop:")
    console.log(result);
  });

});
