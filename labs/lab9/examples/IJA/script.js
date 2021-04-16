let boyoResponse = document.getElementById("boyoResponse");
let txtNumbers = document.getElementById("txtNumbers");


function ozzyOsbourne() {
  var boyoName = txtNumbers.value;
  var splitBoy = boyoName.split(",");
  var total = 0;
  for (let i = 0; i < splitBoy.length; i++) {
    splitBoy[i] = parseFloat(splitBoy[i]);
    total = total + splitBoy[i];
  }
  var average = total / splitBoy.length;
  boyoResponse.innerHTML = "Total sum: " + total + " Total average: " + average;
  document.getElementById('txtPhrase').value='';
}