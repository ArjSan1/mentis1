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

    socket.emit("articleEntry", dateText,  text, name);




}