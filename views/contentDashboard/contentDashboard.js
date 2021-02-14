var socket = io();
let message = document.getElementById("welcome")
console.log('asd');

console.log(socket);
socket.emit('requestPersonalData', 1);


socket.on('personalData', (name)=>{ 
  console.log(name);

})                      