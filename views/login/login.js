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

  /*fetch("/loginInfo?name="+name+"&password="+password)
  .then(response => response.json())
  .then(data => 

      console.log(data)
  
  
  
  );*/
}