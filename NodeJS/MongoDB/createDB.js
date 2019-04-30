var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/exNode";

// criando db
MongoClient.connect(url, function(err, db) {
  console.log("Criado db exNode!");
  db.close();
});

url = "mongodb://localhost:27017/";

// criando collection, a populando e a mostrando
MongoClient.connect(url, function(err, db) {


  var dbo = db.db("exNode");
  // criacao da collection teste
  dbo.createCollection("teste", function(err, res) {
    console.log("Criada Collection teste!");
  });

  var myobj = [
    { id: 1, nome: 'teste1' },
    { id: 2, nome: 'teste2' },
    { id: 3, nome: 'teste3' }
  ];
  // populando collection teste
  dbo.collection("teste").insertMany(myobj, function(err, res) {
    console.log("Numero de documents inseridos na collection teste: " + res.insertedCount);
  });

  // criacao da collection teste 2
  dbo.createCollection("teste2", function(err, res) {
    console.log("Criada Collection teste2!");
  });

  myobj = { id: 1 };
  // populando collection teste 2
  dbo.collection("teste2").insertOne(myobj, function(err, res) {
    console.log("Numero de documents inseridos na collection teste2: " + res.insertedCount);
  });

  // monstrando collection teste
  dbo.collection("teste").find({}).toArray(function(err, result) {
    console.log("Collection teste:");
    console.log(result);
  });

  // monstrando collection teste 2
  dbo.collection("teste2").find({}).toArray(function(err, result) {
    console.log("Collection teste2:");
    console.log(result);
  });

  db.close();

});
