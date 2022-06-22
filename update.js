var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("onlinestore");
  var myquery = { price: "$450" };
  var newvalues = { $set: { "product_name": "Asus Pro M1",
  "price": "$450",
  "category": "Mobile Headset" } };
  dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});