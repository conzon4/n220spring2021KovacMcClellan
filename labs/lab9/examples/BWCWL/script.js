let boyoResponse = document.getElementById("boyoResponse");
let txtPhrase = document.getElementById("txtPhrase");
let boyoInitial = document.getElementById("boyoInitial");

function ozzyOsbourne() {
  var boyoName = txtPhrase.value;
  var splitBoy = boyoName.split(" ");
  var badWords = 0;
  for (let i = 0; i < splitBoy.length; i++) {
    splitBoy[i]= splitBoy[i].toUpperCase();
    if(splitBoy[i] == "WATER"){
      badWords = badWords + 1;
    } else if(splitBoy[i] == "TIRES"){
      badWords = badWords + 1;
    } else if(splitBoy[i] == "CLEAR"){
      badWords = badWords + 1;
    }
  }
  if(badWords > 0){
    boyoInitial.innerHTML = "Bad words detected!";
    boyoResponse.innerHTML = "Detected bad words: "+badWords;
  } else{
    boyoInitial.innerHTML = "No bad words detected.";
    boyoResponse.innerHTML = "Have a nice day!";
  }
  document.getElementById('txtPhrase').value='';
}
