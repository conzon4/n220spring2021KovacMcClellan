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
  var par1 = "";
  var par2 = "";
  var par3 = "";
  if (splitBoy.includes("WATER")){
    var par1 = " " +splitBoy.find(k => k=='WATER');
  }if (splitBoy.includes("TIRES")){
    var par2 = " " +splitBoy.find(k => k=='TIRES');
  }if (splitBoy.includes("CLEAR")){
    var par3 = " " +splitBoy.find(k => k=='CLEAR');
  } 

  if(splitBoy.includes("WATER")||splitBoy.includes("TIRES")||splitBoy.includes("CLEAR")){
    boyoInitial.innerHTML = "Bad words detected! They are:" + par1 + par2 + par3;
    boyoResponse.innerHTML = "Detected bad words: "+badWords;
  } else{
    boyoInitial.innerHTML = "No bad words detected.";
    boyoResponse.innerHTML = "Have a nice day!";
  }
  document.getElementById('txtPhrase').value='';
}
