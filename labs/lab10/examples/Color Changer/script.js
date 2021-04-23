//Acquire boxes.
let boxyBoy1 = document.getElementById("boxyBoy1");
boxyBoy1.addEventListener("click", onClick);

let boxyBoy2 = document.getElementById("boxyBoy2");
boxyBoy2.addEventListener("click", onClick);

let boxyBoy3 = document.getElementById("boxyBoy3");
boxyBoy3.addEventListener("click", onClick);

//Set boxes to default size, complete with grey.
boxyBoy1.style.backgroundColor = "rgb(145, 145, 145)";
boxyBoy1.style.width = "200px";
boxyBoy1.style.height = "200px";
boxyBoy1.style.float = "left";
boxyBoy1.style.margin = "5px";

boxyBoy2.style.backgroundColor = "rgb(145, 145, 145)";
boxyBoy2.style.width = "200px";
boxyBoy2.style.height = "200px";
boxyBoy2.style.margin = "5px";
boxyBoy2.style.float = "left";

boxyBoy3.style.backgroundColor = "rgb(145, 145, 145)";
boxyBoy3.style.width = "200px";
boxyBoy3.style.height = "200px";
boxyBoy3.style.margin = "5px";
boxyBoy3.style.float = "left";

//Single event handler when element is clicked.
function onClick(event) {
  //Check the data-response.
  let boxyRes = event.target.getAttribute("data-response");
  //If it's the first one, do red.
  if (boxyRes == "uno"){
    event.target.style.backgroundColor = "rgb(135, 0, 0)";
  }//If it's the second one, do green.
  else if (boxyRes == "dos"){
    event.target.style.backgroundColor = "rgb(0, 135, 0)";
  }//If it's the third one, do blue.
  else if (boxyRes == "tres"){
    event.target.style.backgroundColor = "rgb(0, 0, 135)";
  }
}