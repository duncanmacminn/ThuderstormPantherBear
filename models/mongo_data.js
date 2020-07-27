var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("TravelExp");
  var myobj = {
    firstname: "Ida",
    lastname: "Berger",
    email: "idaberger@yahoo.ca",
    country: "Canada",
    subject: "Would like to know more",
  };
  dbo.collection("customers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

exports.getContactData = (customerid, callBack) => {
  if (!customerid) getData("customers", [customerid, callBack]);
  else getData("firstname", [customerid], callBack);
};

function getData(collection, arguments, callBack) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("TravelExp");
    dbo
      .collection(collection)
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        //console.log(result);
        callBack(null, result);
        db.close();
      });
  });
}
