let nameInput = document.getElementById('nameInput');
let submitNameButton = document.getElementById('submitName');
let namePrompt = document.getElementById('namePrompt');
var socket = io();

let passwordInput = document.getElementById('passwordInput');
let submitPasswordButton = document.getElementById('submitPassword');
let passwordPrompt = document.getElementById('passwordPrompt');

let therapistNumInput = document.getElementById("therapistNumInput"); 
let submitTherapistNumButton = document.getElementById("submitTherapistNum");
let therapistNumPrompt = document.getElementById("therapistNumPrompt");

let patientNumInput = document.getElementById("patientNumInput");
let submitPatientNumButton = document.getElementById("submitPatientNum");
let patientNumPrompt = document.getElementById("patientNumPrompt");


let name;
let password;
let therapistNum;
let patientNum;


function submitName() {
  name = nameInput.value;
  
  console.log(name);
  nameInput.style.display="none";
  submitNameButton.style.display = "none";
  namePrompt.innerHTML="Name submitted!";
  localStorage.setItem("name", name);
/*fetch("/signUpInfo?name="+name)
  .then(response => response.json())
  .then(data => console.log(data));*/


}

function submitPassword(){
  
  password = passwordInput.value;
    localStorage.setItem("password", password);

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
    localStorage.setItem("therapistNum", therapistNum);
}
    
function submitPatientNum(){
  patientNum = patientNumInput.value;
  //console.log(patientNum);
  patientNumInput.value="";
  patientNumInput.style.display="none";
  submitPatientNumButton.style.display="none";
  patientNumPrompt.innerHTML="Patient Number Submitted!"
    localStorage.setItem("patientNum", patientNum);


    if (name != "" && password != "" && therapistNum != "" && patientNum != ""){


  fetch("/signUpInfo?name="+name+"&password="+password+"&therapistNum="+therapistNum + "&patientNum" + patientNum)
  .then(response => response.json())
  .then(data => console.log(data));

        window.location.replace("https://mentis.ibrahimshah.repl.co");


}
   
}

