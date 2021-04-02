let dvResponse = document.getElementById("dvResponse");
let getPrice = document.getElementById("getPrice");

function ozzyOsbourne() {
  var price = Number(getPrice.value);
  tip = price / 5;
  total = price + tip;
  dvResponse.innerHTML = "Original price: " + price + "$. Tip: " + tip + "$. Total: " + total + "$.";
  console.log("Tip: $" + tip + ". Total: $" + total);
}