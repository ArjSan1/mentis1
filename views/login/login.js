let nameInput = document.getElementById('nameInput');
let passwordInput = document.getElementById('passwordInput');
let submitNameButton = document.getElementById('submitName');
let submitPasswordButton = document.getElementById('submitPassword');
var socket = io();

let name;
let password;


function submitName(){
   
  name = nameInput.value;
  console.log(name);
  nameInput.style.display="none";
  submitNameButton.style.display = "none";
  namePrompt.innerHTML="Name submitted!";




}


function submitPassword(){

  password = passwordInput.value;
  console.log(password);
  passwordInput.style.display="none";
  submitPasswordButton.style.display="none";
  passwordPrompt.innerHTML="Password submitted!";

  socket.emit('userLogin', name, password);
  /*fetch("/loginInfo?name="+name+"&password="+password)
  .then(response => response.json())
  .then(data => 

      console.log(data)
  
  
  
  );*/
}

socket.on('validity', (validity, name, therapistNum)=>{
  console.log(validity);
  console.log(name);
  console.log(therapistNum);
  if (validity == "correct"){
      /*fetch('/redirect&validity='+validity)
      .then(response => response.json())
      .then(data => console.log(data));
      console.log("Information is valid ");*/
      window.location.replace("https://mentis.ibrahimshah.repl.co/contentDashboard/contentDashboard.html");


  }else{

    console.log("Login info invalid you whore")
  }


})