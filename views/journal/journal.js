let textBox = document.getElementById("journalInput");
let name = localStorage.getItem("name");
//let box = document.getElementsByClassName("dataEntry");
//let pStyle = document.getElementByC
var socket = io();

let text;

let dataSection = document.getElementById("dataSection");

function submitText() {

    var d = new Date();
    let year = d.getYear() - 100;
    let dateText = d.getMonth()+"/"+d.getDate()+"/"+year;

    let dateTextNode = document.createTextNode(d.getMonth() + "/" + d.getDate() + "/" + year);
    let br = document.createElement("BR");
    text = textBox.value;
    textBox.value = "";
    let textNode = document.createTextNode(text);
    let box = document.createElement("DIV");
    box.className = "dataEntry";
    let paragraph = document.createElement("P");
    paragraph.className = "data";
    paragraph.appendChild(dateTextNode);
    paragraph.appendChild(br);
    paragraph.appendChild(textNode);
    box.appendChild(paragraph);
    dataSection.appendChild(box);

    socket.emit("articleEntry", dateText,  text, name, dateText);




}
let message = document.getElementById("title")

let name2 = localStorage.getItem("name");

message.innerHTML = name2 + "'s Journal";

socket.emit("retrieveJournalData", name);

socket.on('articlesSent', (data)=>{

  for (i = 0; i < (Object.keys(data).length); i++) {

      let date = data[i]["date"];
      let text = data[i]["text"];
      let dateTextNode = document.createTextNode(date);
      let textNode = document.createTextNode(text);
      let br = document.createElement("BR");

      let box = document.createElement("DIV");
    box.className = "dataEntry";
    let paragraph = document.createElement("P");
    paragraph.className = "data";
    paragraph.appendChild(dateTextNode);
    paragraph.appendChild(br);
    paragraph.appendChild(textNode);
    box.appendChild(paragraph);
    dataSection.appendChild(box);

  }

  console.log(data);
})

