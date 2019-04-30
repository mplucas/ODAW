var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// deletando, alterando e ordenando collection exNode
MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("exNode");
  var myquery = { id: 1 };

  // monstrando collection
  dbo.collection("teste").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("Collection teste:");
    console.log(result);
  });

  // deletando todos com id = 1
  dbo.collection("teste").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deletados");
  });

  // monstrando collection
  dbo.collection("teste").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("Collection teste depois de delecao:");
    console.log(result);
  });

  // alterando todos nome = teste3
  myquery = { nome: 'teste3' };
  var newvalues = {$set: {id: 1} };
  dbo.collection("teste").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) alterados");
  });

  // monstrando collection
  dbo.collection("teste").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("Collection teste depois de alteracao:");
    console.log(result);
  });

  // ordenando por id
  var mysort = { id: 1 };
  dbo.collection("teste").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log("Collection teste ordenada por id:");
    console.log(result);
  });

  db.close();

});
