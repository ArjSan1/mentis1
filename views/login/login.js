let nameInput = document.getElementById('nameInput');
let passwordInput = document.getElementById('passwordInput');
let submitNameButton = document.getElementById('submitName');
let submitPasswordButton = document.getElementById('submitPassword');
var socket = io();

let name;
let password;


function submitName(){
   
  name = nameInput.value;
  nameInput.value="";
  console.log(name);
  nameInput.style.display="none";
  submitNameButton.style.display = "none";
  namePrompt.innerHTML="Name submitted!";




}


function submitPassword(){

  password = passwordInput.value;
  passwordInput.value="";
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
  if (validity == "correct"){
      /*fetch('/redirect&validity='+validity)
      .then(response => response.json())
      .then(data => console.log(data));
      console.log("Information is valid ");*/
      socket.emit('dashboardUpdate', name, therapistNum);

      window.location.replace("https://mentis.ibrahimshah.repl.co/contentDashboard/contentDashboard.html");


  }else{
      title.innerHTML = "Login information is incorrect."
        namePrompt.innerHTML="Please enter your name";
        passwordPrompt.innerHTML = "Please enter your password";
      nameInput.style.display="initial";
      submitNameButton.style.display = "initial";

      passwordInput.style.display="initial";
      submitPasswordButton.style.display="initial";



  }


})