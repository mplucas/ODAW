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

  // deleta item 2 do bd exNode
  var sql = "DELETE FROM teste WHERE id = 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Deletou registro 2 da tabela teste");
  });

  // selecionando valores da tabela teste
  con.query("SELECT * FROM teste", function (err, result, fields) {
    if (err) throw err;
    console.log("Valores contidos na tabela teste:")
    console.log(result);
  });

  // altera item 3 do bd exNode
  var sql = "UPDATE teste SET nome='teste2' WHERE id = 3";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Alterou registro com id 3 da tabela teste");
  });

  // selecionando valores da tabela teste
  con.query("SELECT * FROM teste", function (err, result, fields) {
    if (err) throw err;
    console.log("Valores contidos na tabela teste:")
    console.log(result);
  });

});
