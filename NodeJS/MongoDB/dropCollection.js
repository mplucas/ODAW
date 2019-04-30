var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// mostra e dropa collection teste
MongoClient.connect(url, function(err, db) {

  var dbo = db.db("exNode");

  // lista collections do banco
  dbo.listCollections().toArray(function(err, collInfos) {
      console.log("Collections em exNode antes do drop");
      console.log(collInfos);
  });

  // dropa collection teste
  dbo.collection("teste").drop(function(err, delOK) {
    if (delOK) console.log("Collection teste deletada");
  });

  // lista collections do banco
  dbo.listCollections().toArray(function(err, collInfos) {
      console.log("Collections em exNode depois do drop");
      console.log(collInfos);
  });

  db.close();

});
