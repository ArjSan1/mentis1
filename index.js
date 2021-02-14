const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
var mongo = require('mongodb');
var io = require('socket.io')(server);
var Sentiment = require('sentiment');

var sentiment = new Sentiment();


var MongoClient = require('mongodb').MongoClient;
app.use(express.static('views'));
var url = "mongodb+srv://mentisUsername:mentisPassword@mentiscluster.dx0bc.mongodb.net/MentisCluster?retryWrites=true&w=majority"

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MentisCluster");
  
  dbo.collection("journals").deleteMany(function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});*/


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');

});

/*app.get('/redirect', (req, res) => {

    res.sendFile(__dirname+ '/views/index.html')
})*/
let counter = -1;
let people = {}
let tempName;
let tempTherapistNum;
io.on('connection', (socket) => {

    socket.on('retrieveJournalData', (name) => {
        console.log("Name to query: " + name)
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("MentisCluster");
            var query = {
                header: "journal"
            };
            dbo.collection("journals").find(query).toArray(function(err, result) {
                if (err) throw err;
                let journalData = {}
                x = -1;
                for (i = 0; i < (Object.keys(result).length); i++) {

                    //console.log(result[i]);
                    //console.log(result[i]['name']);
                    if (result[i]['name'] == name) {
                        x++;
                        journalData[x] = result[i];




                    }
                    console.log(journalData);




                }

                socket.emit('')
                //console.log(result);
                db.close();
            });
        });




    })
    socket.on('articleEntry', (date, text, name) => {
        let moodScore = sentiment.analyze(text).score;
        console.log(sentiment.analyze(text).score);

        let mood;
        if (moodScore < -2) {

            mood = "negative";
        } else if (moodScore >= -2 && moodScore <= 2) {
            mood = "neutral";
        } else {
            mood = "positive";
        }
        console.log(mood);

        let journalEntry = {
            "header": "journal",
            "text": text,
            "mood": mood,
            "name": name

        }

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("MentisCluster");

            dbo.collection("journals").insertOne(journalEntry, function(err, res) {
                if (err) throw err;
                console.log("Entry has been inputted!");
                db.close();
            });
        });


    })

});




MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});


app.get("/signUpInfo", (req, res) => {

    let signUp = {
        header: "signUp",
        name: req.query.name,
        password: req.query.password,
        therapistNum: req.query.therapistNum
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MentisCluster");

        dbo.collection("journals").insertOne(signUp, function(err, res) {
            if (err) throw err;
            console.log("Sign-Up Info acquired!");
            db.close();
        });
    });



})


/*app.get("/loginInfo", (req, res)=>{

  let name = req.query.name;
  let password = req.query.password;

  console.log(req.query.name);
  console.log(req.query.password);




  MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("MentisCluster");
  var query = { header: "signUp" };

  dbo.collection("journals").find(query).toArray(function(err, result) {


    if (err) throw err;
    console.log(result);

    for (i=0; i<(Object.keys(result).length);i++){


      let compareToPassword = result[i]["password"];
      let compareToName = result[i]["name"];

      if (name==compareToName && password==compareToPassword){


      }
      console.log(result[i]["name"]);
      
    }


    db.close();


  });
});





})*/




server.listen(3000, () => console.log(`Listening on port 3000`));