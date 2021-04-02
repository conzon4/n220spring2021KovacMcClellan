let yoJo = document.getElementById("yoJo");
let Password = document.getElementById("Password");
let Username = document.getElementById("Username");

function ozzyOsbourne() {
  var usNm = Username.value;
  var psWd = Password.value;
  if(usNm == "Username" && psWd == "Password") {
    yoJo.innerHTML = "Success!";
  } else {
    yoJo.innerHTML = "Failure. Check your credentials, hackerman. Or woman. Or whatever you identify as.";
  }
}