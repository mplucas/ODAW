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

  // cria bd exNode
  var sql = "CREATE DATABASE exNode";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Criou banco de dados exNode");
  });

  // utiliza bd exNode
  sql = "USE exNode";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Comecou a utilizar bd exNode");
  });

  // cria tabela teste
  sql = "CREATE TABLE teste (id INTEGER, nome VARCHAR(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Criou tabela teste");
  });

  // insere valores em teste
  sql = "INSERT INTO teste (id, nome) VALUES (1, 'teste1'),(2, 'teste2'),(3, 'teste3')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Inseriu tres itens na tabela teste");
  });

  // selecionando valores da tabela teste
  con.query("SELECT * FROM teste", function (err, result, fields) {
    if (err) throw err;
    console.log("Valores contidos na tabela teste:")
    console.log(result);
  });

});
