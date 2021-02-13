const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
app.use(express.static('views'));
var url = "mongodb+srv://mentisUsername:mentisPassword@mentiscluster.dx0bc.mongodb.net/MentisCluster?retryWrites=true&w=majority"

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');

});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});




/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MentisCluster");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("journals").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/



server.listen(3000, () => console.log(`Listening on port 3000`));