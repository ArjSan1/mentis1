let nameInput = document.getElementById('nameInput');
let submitNameButton = document.getElementById('submitName');
let namePrompt = document.getElementById('namePrompt');

let passwordInput = document.getElementById('passwordInput');
let submitPasswordButton = document.getElementById('submitPassword');
let passwordPrompt = document.getElementById('passwordPrompt');

let therapistNumInput = document.getElementById("therapistNumInput") 
let submitTherapistNumButton = document.getElementById("submitTherapistNum")
let therapistNumPrompt = document.getElementById("therapistNumPrompt")

function submitName() {
  let name = nameInput.value;
  console.log(name);
  nameInput.style.display="none";
  submitNameButton.style.display = "none";
  namePrompt.innerHTML="Name submitted!";



}

function submitPassword(){
  
  let password = passwordInput.value;
  console.log(password);
  passwordInput.style.display="none";
  submitPasswordButton.style.display="none";
  passwordPrompt.innerHTML="Password submitted!"
  
}

function submitTherapistNum(){
let therapistNum = therapistNumInput.value;
console.log(therapistNum);
therapistNumInput.style.display="none";
submitTherapistNumButton.style.display="none";
therapistNumPrompt.innerHTML="Therapist Number Submitted!"
   
}
