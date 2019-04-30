var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// dropa banco de dados
MongoClient.connect(url, function(err, db) {

  var dbo = db.db("exNode");

  dbo.dropDatabase(function(err, result){
      console.log("Erro : "+err);
      console.log("Banco de dados dropado "+result);
      db.close();
  });

});
