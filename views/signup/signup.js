let nameInput = document.getElementById('nameInput');
let submitNameButton = document.getElementById('submitName');
let namePrompt = document.getElementById('namePrompt');
var socket = io();

let passwordInput = document.getElementById('passwordInput');
let submitPasswordButton = document.getElementById('submitPassword');
let passwordPrompt = document.getElementById('passwordPrompt');

let therapistNumInput = document.getElementById("therapistNumInput") 
let submitTherapistNumButton = document.getElementById("submitTherapistNum")
let therapistNumPrompt = document.getElementById("therapistNumPrompt")

let name;
let password;
let therapistNum;


function submitName() {
  name = nameInput.value;
  console.log(name);
  nameInput.style.display="none";
  submitNameButton.style.display = "none";
  namePrompt.innerHTML="Name submitted!";
  
/*fetch("/signUpInfo?name="+name)
  .then(response => response.json())
  .then(data => console.log(data));*/


}

function submitPassword(){
  
  password = passwordInput.value;
  console.log(password);
  passwordInput.style.display="none";
  submitPasswordButton.style.display="none";
  passwordPrompt.innerHTML="Password submitted!"

  /*fetch("/signUpInfo?password="+password)
  .then(response => response.json())
  .then(data => console.log(data));*/

}

function submitTherapistNum(){
  therapistNum = therapistNumInput.value;
  console.log(therapistNum);
  therapistNumInput.style.display="none";
  submitTherapistNumButton.style.display="none";
  therapistNumPrompt.innerHTML="Therapist Number Submitted!"

    if (name != "" && password != "" && therapistNum != ""){


  fetch("/signUpInfo?name="+name+"&password="+password+"&therapistNum="+therapistNum)
  .then(response => response.json())
  .then(data => console.log(data));

}
   
}

