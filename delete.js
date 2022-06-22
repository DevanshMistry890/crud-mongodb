var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("onlinestore");
  var query = { price: "$450" };
  dbo.collection("products").deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});