var socket = io();
let message = document.getElementById("welcome")

let name = localStorage.getItem("name");

message.innerHTML = "Welcome back, "+name+".";