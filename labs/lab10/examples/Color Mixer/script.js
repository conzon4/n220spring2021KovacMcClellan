//Get field for current color
let curColor = document.getElementById("curColor");
let curRed = 0;
let curGre = 0;
let curBlu = 0;

//Get div for the box displaying the color.
let boxyBoy = document.getElementById("boxyBoy");
boxyBoy.style.backgroundColor = "rgb(0, 0, 0)";
boxyBoy.style.width = "200px";
boxyBoy.style.height = "200px";

//Get buttons for different colors.
let red1 = document.getElementById("red1");
red1.addEventListener("click", onClick);
let red2 = document.getElementById("red2");
red2.addEventListener("click", onClick);
let red3 = document.getElementById("red3");
red3.addEventListener("click", onClick);

let gre1 = document.getElementById("gre1");
gre1.addEventListener("click", onClick);
let gre2 = document.getElementById("gre2");
gre2.addEventListener("click", onClick);
let gre3 = document.getElementById("gre3");
gre3.addEventListener("click", onClick);

let blu1 = document.getElementById("blu1");
blu1.addEventListener("click", onClick);
let blu2 = document.getElementById("blu2");
blu2.addEventListener("click", onClick);
let blu3 = document.getElementById("blu3");
blu3.addEventListener("click", onClick);

function onClick(event) {
  let butRes = event.target.getAttribute("data-response");
  if (butRes == "uno1"){
    curRed = curRed + 1;
  }else if (butRes == "dos1"){
    curRed = curRed + 5;
  }else if (butRes == "tre1"){
    curRed = curRed + 10;
  }else if (butRes == "uno2"){
    curGre = curGre + 1;
  }else if (butRes == "dos2"){
    curGre = curGre + 5;
  }else if (butRes == "tre2"){
    curGre = curGre + 10;
  }else if (butRes == "uno3"){
    curBlu = curBlu + 1;
  }else if (butRes == "dos3"){
    curBlu = curBlu + 5;
  }else if (butRes == "tre3"){
    curBlu = curBlu + 10;
  }
  boxyBoy.style.backgroundColor = "rgb("+curRed+","+curGre+","+curBlu+")";
  curColor.innerHTML = "("+curRed+","+curGre+","+curBlu+")";
}