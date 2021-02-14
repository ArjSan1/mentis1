const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
var mongo = require('mongodb');
var io = require('socket.io')(server);

var MongoClient = require('mongodb').MongoClient;
app.use(express.static('views'));
var url = "mongodb+srv://mentisUsername:mentisPassword@mentiscluster.dx0bc.mongodb.net/MentisCluster?retryWrites=true&w=majority"

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
    console.log("A user has connected");
    socket.on('requestPersonalData', (data)=>{
          socket.emit("personalData", people);


      })
    socket.on('dashboardUpdate', (name, therapistNum)=>{
      counter = counter + 1;
      tempName = name;
      tempTherapistNum = therapistNum;
      let individual = {"name": name, "therapistNum": therapistNum}
      people[counter]=individual;
      console.log("Dashboard has been called");
      
      //console.log(name);
      //console.log(therapistNum);


    })
    socket.on('userLogin', (name, password)=>{

            console.log(name);
            console.log(password);



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
          console.log("Correct login info")
          console.log("match found")
          let validity = "correct";
          let therapistNum = result[i]["therapistNum"]
          socket.emit("validity", validity, name, therapistNum);
          break;
      }else{
        /*let validity = "false";
        name = null;
        therapistNum = null;
        socket.emit("validity", validity, name, therapistNum);*/



      }
      console.log(result[i]["name"]);
      
    }


    db.close();


  });
});








    }

      
    )
});





MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


app.get("/signUpInfo", (req, res)=>{

  let signUp = {
    header: "signUp",
    name:req.query.name,
    password:req.query.password,
    therapistNum:req.query.therapistNum
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