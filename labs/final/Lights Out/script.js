//Acquire text field, response, and button.
let boyoResponse = document.getElementById("boyoResponse");
let txtName = document.getElementById("txtName");

//Acquire boxes.
let box11 = document.getElementById("box11");//row 1
box11.addEventListener("click", onClick);
let box12 = document.getElementById("box12");
box12.addEventListener("click", onClick);
let box13 = document.getElementById("box13");
box13.addEventListener("click", onClick);
let box14 = document.getElementById("box14");
box14.addEventListener("click", onClick);
let box15 = document.getElementById("box15");
box15.addEventListener("click", onClick);
let box21 = document.getElementById("box21");//row 2
box21.addEventListener("click", onClick);
let box22 = document.getElementById("box22");
box22.addEventListener("click", onClick);
let box23 = document.getElementById("box23");
box23.addEventListener("click", onClick);
let box24 = document.getElementById("box24");
box24.addEventListener("click", onClick);
let box25 = document.getElementById("box25");
box25.addEventListener("click", onClick);
let box31 = document.getElementById("box31");//row 3
box31.addEventListener("click", onClick);
let box32 = document.getElementById("box32");
box32.addEventListener("click", onClick);
let box33 = document.getElementById("box33");
box33.addEventListener("click", onClick);
let box34 = document.getElementById("box34");
box34.addEventListener("click", onClick);
let box35 = document.getElementById("box35");
box35.addEventListener("click", onClick);
let box41 = document.getElementById("box41");//row 4
box41.addEventListener("click", onClick);
let box42 = document.getElementById("box42");
box42.addEventListener("click", onClick);
let box43 = document.getElementById("box43");
box43.addEventListener("click", onClick);
let box44 = document.getElementById("box44");
box44.addEventListener("click", onClick);
let box45 = document.getElementById("box45");
box45.addEventListener("click", onClick);
let box51 = document.getElementById("box51");//row 5
box51.addEventListener("click", onClick);
let box52 = document.getElementById("box52");
box52.addEventListener("click", onClick);
let box53 = document.getElementById("box53");
box53.addEventListener("click", onClick);
let box54 = document.getElementById("box54");
box54.addEventListener("click", onClick);
let box55 = document.getElementById("box55");
box55.addEventListener("click", onClick);

//row 1

box11.style.backgroundColor = "rgb(145, 145, 145)";
box11.style.width = "75px";box11.style.height = "75px";
box11.style.float = "left";
box11.style.margin = "5px";
box12.style.backgroundColor = "rgb(145, 145, 145)";
box12.style.width = "75px";box12.style.height = "75px";
box12.style.margin = "5px";
box12.style.float = "left";
box13.style.backgroundColor = "rgb(145, 145, 145)";
box13.style.width = "75px";box13.style.height = "75px";
box13.style.margin = "5px";
box13.style.float = "left";
box14.style.backgroundColor = "rgb(145, 145, 145)";
box14.style.width = "75px";box14.style.height = "75px";
box14.style.float = "left";
box14.style.margin = "5px";
box15.style.backgroundColor = "rgb(145, 145, 145)";
box15.style.width = "75px";box15.style.height = "75px";
box15.style.float = "left";
box15.style.margin = "5px";

//row 2

box21.style.backgroundColor = "rgb(145, 145, 145)";
box21.style.width = "75px";
box21.style.height = "75px";
box21.style.float = "left";
box21.style.margin = "5px";

box22.style.backgroundColor = "rgb(145, 145, 145)";
box22.style.width = "75px";
box22.style.height = "75px";
box22.style.margin = "5px";
box22.style.float = "left";

box23.style.backgroundColor = "rgb(145, 145, 145)";
box23.style.width = "75px";
box23.style.height = "75px";
box23.style.margin = "5px";
box23.style.float = "left";

box24.style.backgroundColor = "rgb(145, 145, 145)";
box24.style.width = "75px";
box24.style.height = "75px";
box24.style.float = "left";
box24.style.margin = "5px";

box25.style.backgroundColor = "rgb(145, 145, 145)";
box25.style.width = "75px";
box25.style.height = "75px";
box25.style.float = "left";
box25.style.margin = "5px";

//row 3

box31.style.backgroundColor = "rgb(145, 145, 145)";
box31.style.width = "75px";
box31.style.height = "75px";
box31.style.float = "left";
box31.style.margin = "5px";

box32.style.backgroundColor = "rgb(145, 145, 145)";
box32.style.width = "75px";
box32.style.height = "75px";
box32.style.margin = "5px";
box32.style.float = "left";

box33.style.backgroundColor = "rgb(145, 145, 145)";
box33.style.width = "75px";
box33.style.height = "75px";
box33.style.margin = "5px";
box33.style.float = "left";

box34.style.backgroundColor = "rgb(145, 145, 145)";
box34.style.width = "75px";
box34.style.height = "75px";
box34.style.float = "left";
box34.style.margin = "5px";

box35.style.backgroundColor = "rgb(145, 145, 145)";
box35.style.width = "75px";
box35.style.height = "75px";
box35.style.float = "left";
box35.style.margin = "5px";

//row 4

box41.style.backgroundColor = "rgb(145, 145, 145)";
box41.style.width = "75px";
box41.style.height = "75px";
box41.style.float = "left";
box41.style.margin = "5px";

box42.style.backgroundColor = "rgb(145, 145, 145)";
box42.style.width = "75px";
box42.style.height = "75px";
box42.style.margin = "5px";
box42.style.float = "left";

box43.style.backgroundColor = "rgb(145, 145, 145)";
box43.style.width = "75px";
box43.style.height = "75px";
box43.style.margin = "5px";
box43.style.float = "left";

box44.style.backgroundColor = "rgb(145, 145, 145)";
box44.style.width = "75px";
box44.style.height = "75px";
box44.style.float = "left";
box44.style.margin = "5px";

box45.style.backgroundColor = "rgb(145, 145, 145)";
box45.style.width = "75px";
box45.style.height = "75px";
box45.style.float = "left";
box45.style.margin = "5px";

//row 5

box51.style.backgroundColor = "rgb(145, 145, 145)";
box51.style.width = "75px";
box51.style.height = "75px";
box51.style.float = "left";
box51.style.margin = "5px";

box52.style.backgroundColor = "rgb(145, 145, 145)";
box52.style.width = "75px";
box52.style.height = "75px";
box52.style.margin = "5px";
box52.style.float = "left";

box53.style.backgroundColor = "rgb(145, 145, 145)";
box53.style.width = "75px";
box53.style.height = "75px";
box53.style.margin = "5px";
box53.style.float = "left";

box54.style.backgroundColor = "rgb(145, 145, 145)";
box54.style.width = "75px";
box54.style.height = "75px";
box54.style.float = "left";
box54.style.margin = "5px";

box55.style.backgroundColor = "rgb(145, 145, 145)";
box55.style.width = "75px";
box55.style.height = "75px";
box55.style.float = "left";
box55.style.margin = "5px";


//Turn and current light counters.
let turnNumber = 0;
let currentLight = 0;

let lightArray1 = [0,0,0,0,0];
let lightArray2 = [0,0,0,0,0];
let lightArray3 = [0,0,0,0,0];
let lightArray4 = [0,0,0,0,0];
let lightArray5 = [0,0,0,0,0];

//Single event handler when element is clicked.
function onClick(event) {
  let boxyRes = event.target.getAttribute("data-response");
  if (boxyRes == "unouno"){//clicking row 1, column 1.
    changeLight(event, 1, 0);
    if (lightArray1[1] == 0){
      lightArray1[1] = 1;currentLight = currentLight + 1;
      box12.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[1] = 0;currentLight = currentLight - 1;
      box12.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[0] == 0){
      lightArray2[0] = 1;currentLight = currentLight + 1;
      box21.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[0] = 0;currentLight = currentLight - 1;
      box21.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "unodos"){//row 1, collumn 2
    changeLight(event, 1, 1);
    if (lightArray1[0] == 0){
      lightArray1[0] = 1;currentLight = currentLight + 1;
      box11.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[0] = 0;currentLight = currentLight - 1;
      box11.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[1] == 0){
      lightArray2[1] = 1;currentLight = currentLight + 1;
      box22.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[1] = 0;currentLight = currentLight - 1;
      box22.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray1[2] == 0){
      lightArray1[2] = 1;currentLight = currentLight + 1;
      box13.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[2] = 0;currentLight = currentLight - 1;
      box13.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "unotres"){//row 1, collumn 3
    changeLight(event, 1, 2);
    if (lightArray1[1] == 0){
      lightArray1[1] = 1;currentLight = currentLight + 1;
      box12.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[1] = 0;currentLight = currentLight - 1;
      box12.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[2] == 0){
      lightArray2[2] = 1;currentLight = currentLight + 1;
      box23.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[2] = 0;currentLight = currentLight - 1;
      box23.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray1[3] == 0){
      lightArray1[3] = 1;currentLight = currentLight + 1;
      box14.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[3] = 0;currentLight = currentLight - 1;
      box14.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "unoquatro"){//row 1 column 4
    changeLight(event, 1, 3);
    if (lightArray1[2] == 0){
      lightArray1[2] = 1;currentLight = currentLight + 1;
      box13.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[2] = 0;currentLight = currentLight - 1;
      box13.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[3] == 0){
      lightArray2[3] = 1;currentLight = currentLight + 1;
      box24.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[3] = 0;currentLight = currentLight - 1;
      box24.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray1[4] == 0){
      lightArray1[4] = 1;currentLight = currentLight + 1;
      box15.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[4] = 0;currentLight = currentLight - 1;
      box15.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "unocinco"){//row 1 column 5
    changeLight(event, 1, 4);
    if (lightArray1[3] == 0){
      lightArray1[3] = 1;currentLight = currentLight + 1;
      box14.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[3] = 0;currentLight = currentLight - 1;
      box14.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[4] == 0){
      lightArray2[4] = 1;currentLight = currentLight + 1;
      box25.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[4] = 0;currentLight = currentLight - 1;
      box25.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "dosuno"){//row 2 column 1
    changeLight(event, 2, 0);
    if (lightArray1[0] == 0){
      lightArray1[0] = 1;currentLight = currentLight + 1;
      box11.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[0] = 0;currentLight = currentLight - 1;
      box11.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[1] == 0){
      lightArray2[1] = 1;currentLight = currentLight + 1;
      box22.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[1] = 0;currentLight = currentLight - 1;
      box22.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[0] == 0){
      lightArray3[0] = 1;currentLight = currentLight + 1;
      box31.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[0] = 0;currentLight = currentLight - 1;
      box31.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "dosdos"){//Row 2, column 2
    changeLight(event, 2, 1);
    if (lightArray1[1] == 0){
      lightArray1[1] = 1;currentLight = currentLight + 1;
      box12.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[1] = 0;currentLight = currentLight - 1;
      box12.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[1] == 0){
      lightArray3[1] = 1;currentLight = currentLight + 1;
      box32.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[1] = 0;currentLight = currentLight - 1;
      box32.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[0] == 0){
      lightArray2[0] = 1;currentLight = currentLight + 1;
      box21.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[0] = 0;currentLight = currentLight - 1;
      box21.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[2] == 0){
      lightArray2[2] = 1;currentLight = currentLight + 1;
      box23.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[2] = 0;currentLight = currentLight - 1;
      box23.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "dostres"){//Row 2, column 3
    changeLight(event, 2, 2);
    if (lightArray1[2] == 0){
      lightArray1[2] = 1;currentLight = currentLight + 1;
      box13.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[2] = 0;currentLight = currentLight - 1;
      box13.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[2] == 0){
      lightArray3[2] = 1;currentLight = currentLight + 1;
      box33.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[2] = 0;currentLight = currentLight - 1;
      box33.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[1] == 0){
      lightArray2[1] = 1;currentLight = currentLight + 1;
      box22.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[1] = 0;currentLight = currentLight - 1;
      box22.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[3] == 0){
      lightArray2[3] = 1;currentLight = currentLight + 1;
      box24.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[3] = 0;currentLight = currentLight - 1;
      box24.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "dosquatro"){//Row 2, column 4
    changeLight(event, 2, 3);
    if (lightArray1[3] == 0){
      lightArray1[3] = 1;currentLight = currentLight + 1;
      box14.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[3] = 0;currentLight = currentLight - 1;
      box14.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[3] == 0){
      lightArray3[3] = 1;currentLight = currentLight + 1;
      box34.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[3] = 0;currentLight = currentLight - 1;
      box34.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[2] == 0){
      lightArray2[2] = 1;currentLight = currentLight + 1;
      box23.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[2] = 0;currentLight = currentLight - 1;
      box23.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[4] == 0){
      lightArray2[4] = 1;currentLight = currentLight + 1;
      box25.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[4] = 0;currentLight = currentLight - 1;
      box25.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "doscinco"){//Row 2, column 5
    changeLight(event, 2, 4);
    if (lightArray1[4] == 0){
      lightArray1[4] = 1;currentLight = currentLight + 1;
      box15.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray1[4] = 0;currentLight = currentLight - 1;
      box15.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray2[3] == 0){
      lightArray2[3] = 1;currentLight = currentLight + 1;
      box24.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[3] = 0;currentLight = currentLight - 1;
      box24.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[4] == 0){
      lightArray3[4] = 1;currentLight = currentLight + 1;
      box35.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[4] = 0;currentLight = currentLight - 1;
      box35.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "tresuno"){//row 3 column 1
    changeLight(event, 3, 0);
    if (lightArray2[0] == 0){
      lightArray2[0] = 1;currentLight = currentLight + 1;
      box21.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[0] = 0;currentLight = currentLight - 1;
      box21.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[1] == 0){
      lightArray3[1] = 1;currentLight = currentLight + 1;
      box32.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[1] = 0;currentLight = currentLight - 1;
      box32.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[0] == 0){
      lightArray4[0] = 1;currentLight = currentLight + 1;
      box41.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[0] = 0;currentLight = currentLight - 1;
      box41.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "tresdos"){//Row 3, column 2
    changeLight(event, 3, 1);
    if (lightArray2[1] == 0){
      lightArray2[1] = 1;currentLight = currentLight + 1;
      box22.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[1] = 0;currentLight = currentLight - 1;
      box22.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[1] == 0){
      lightArray4[1] = 1;currentLight = currentLight + 1;
      box42.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[1] = 0;currentLight = currentLight - 1;
      box42.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[0] == 0){
      lightArray3[0] = 1;currentLight = currentLight + 1;
      box31.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[0] = 0;currentLight = currentLight - 1;
      box31.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[2] == 0){
      lightArray3[2] = 1;currentLight = currentLight + 1;
      box33.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[2] = 0;currentLight = currentLight - 1;
      box33.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "trestres"){//Row 3, column 3
    changeLight(event, 3, 2);
    if (lightArray2[2] == 0){
      lightArray2[2] = 1;currentLight = currentLight + 1;
      box23.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[2] = 0;currentLight = currentLight - 1;
      box23.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[2] == 0){
      lightArray4[2] = 1;currentLight = currentLight + 1;
      box43.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[2] = 0;currentLight = currentLight - 1;
      box43.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[1] == 0){
      lightArray3[1] = 1;currentLight = currentLight + 1;
      box32.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[1] = 0;currentLight = currentLight - 1;
      box32.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[3] == 0){
      lightArray3[3] = 1;currentLight = currentLight + 1;
      box34.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[3] = 0;currentLight = currentLight - 1;
      box34.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "tresquatro"){//Row 3, column 4
    changeLight(event, 3, 3);
    if (lightArray2[3] == 0){
      lightArray2[3] = 1;currentLight = currentLight + 1;
      box24.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[3] = 0;currentLight = currentLight - 1;
      box24.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[3] == 0){
      lightArray4[3] = 1;currentLight = currentLight + 1;
      box44.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[3] = 0;currentLight = currentLight - 1;
      box44.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[2] == 0){
      lightArray3[2] = 1;currentLight = currentLight + 1;
      box33.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[2] = 0;currentLight = currentLight - 1;
      box33.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[4] == 0){
      lightArray3[4] = 1;currentLight = currentLight + 1;
      box35.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[4] = 0;currentLight = currentLight - 1;
      box35.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "trescinco"){//Row 3, column 5
    changeLight(event, 3, 4);
    if (lightArray2[4] == 0){
      lightArray2[4] = 1;currentLight = currentLight + 1;
      box25.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray2[4] = 0;currentLight = currentLight - 1;
      box25.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[3] == 0){
      lightArray3[3] = 1;currentLight = currentLight + 1;
      box34.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[3] = 0;currentLight = currentLight - 1;
      box34.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[4] == 0){
      lightArray4[4] = 1;currentLight = currentLight + 1;
      box45.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[4] = 0;currentLight = currentLight - 1;
      box45.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "quatrouno"){//Row 4, column 1
    changeLight(event, 4, 0);
    if (lightArray3[0] == 0){
      lightArray3[0] = 1;currentLight = currentLight + 1;
      box31.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[0] = 0;currentLight = currentLight - 1;
      box31.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[1] == 0){
      lightArray4[1] = 1;currentLight = currentLight + 1;
      box42.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[1] = 0;currentLight = currentLight - 1;
      box42.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[0] == 0){
      lightArray5[0] = 1;currentLight = currentLight + 1;
      box51.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[0] = 0;currentLight = currentLight - 1;
      box51.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "quatrodos"){//Row 4, column 2
    changeLight(event, 4, 1);
    if (lightArray3[1] == 0){
      lightArray3[1] = 1;currentLight = currentLight + 1;
      box32.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[1] = 0;currentLight = currentLight - 1;
      box32.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[1] == 0){
      lightArray5[1] = 1;currentLight = currentLight + 1;
      box52.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[1] = 0;currentLight = currentLight - 1;
      box52.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[0] == 0){
      lightArray4[0] = 1;currentLight = currentLight + 1;
      box41.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[0] = 0;currentLight = currentLight - 1;
      box41.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[2] == 0){
      lightArray4[2] = 1;currentLight = currentLight + 1;
      box43.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[2] = 0;currentLight = currentLight - 1;
      box43.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "quatrotres"){//Row 4, column 3
    changeLight(event, 4, 2);
    if (lightArray3[2] == 0){
      lightArray3[2] = 1;currentLight = currentLight + 1;
      box33.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[2] = 0;currentLight = currentLight - 1;
      box33.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[2] == 0){
      lightArray5[2] = 1;currentLight = currentLight + 1;
      box53.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[2] = 0;currentLight = currentLight - 1;
      box53.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[1] == 0){
      lightArray4[1] = 1;currentLight = currentLight + 1;
      box42.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[1] = 0;currentLight = currentLight - 1;
      box42.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[3] == 0){
      lightArray4[3] = 1;currentLight = currentLight + 1;
      box44.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[3] = 0;currentLight = currentLight - 1;
      box44.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "quatroquatro"){//Row 4, column 4
    changeLight(event, 4, 3);
    if (lightArray3[3] == 0){
      lightArray3[3] = 1;currentLight = currentLight + 1;
      box34.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[3] = 0;currentLight = currentLight - 1;
      box34.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[3] == 0){
      lightArray5[3] = 1;currentLight = currentLight + 1;
      box54.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[3] = 0;currentLight = currentLight - 1;
      box54.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[2] == 0){
      lightArray4[2] = 1;currentLight = currentLight + 1;
      box43.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[2] = 0;currentLight = currentLight - 1;
      box43.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[4] == 0){
      lightArray4[4] = 1;currentLight = currentLight + 1;
      box45.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[4] = 0;currentLight = currentLight - 1;
      box45.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "quatrocinco"){//Row 4, column 5
    changeLight(event, 4, 4);
    if (lightArray5[4] == 0){
      lightArray5[4] = 1;currentLight = currentLight + 1;
      box55.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[4] = 0;currentLight = currentLight - 1;
      box55.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray4[3] == 0){
      lightArray4[3] = 1;currentLight = currentLight + 1;
      box44.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[3] = 0;currentLight = currentLight - 1;
      box44.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray3[4] == 0){
      lightArray3[4] = 1;currentLight = currentLight + 1;
      box35.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray3[4] = 0;currentLight = currentLight - 1;
      box35.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "cincouno"){//Row 5, column 1
    changeLight(event, 5, 0);
    if (lightArray4[0] == 0){
      lightArray4[0] = 1;currentLight = currentLight + 1;
      box41.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[0] = 0;currentLight = currentLight - 1;
      box41.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[1] == 0){
      lightArray5[1] = 1;currentLight = currentLight + 1;
      box52.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[1] = 0;currentLight = currentLight - 1;
      box52.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "cincodos"){//Row 5, column 2
    changeLight(event, 5, 1);
    if (lightArray4[1] == 0){
      lightArray4[1] = 1;currentLight = currentLight + 1;
      box42.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[1] = 0;currentLight = currentLight - 1;
      box42.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[2] == 0){
      lightArray5[2] = 1;currentLight = currentLight + 1;
      box53.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[2] = 0;currentLight = currentLight - 1;
      box53.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[0] == 0){
      lightArray5[0] = 1;currentLight = currentLight + 1;
      box51.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[0] = 0;currentLight = currentLight - 1;
      box51.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "cincotres"){//Row 5, column 3
    changeLight(event, 5, 2);
    if (lightArray4[2] == 0){
      lightArray4[2] = 1;currentLight = currentLight + 1;
      box43.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[2] = 0;currentLight = currentLight - 1;
      box43.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[3] == 0){
      lightArray5[3] = 1;currentLight = currentLight + 1;
      box54.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[3] = 0;currentLight = currentLight - 1;
      box54.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[1] == 0){
      lightArray5[1] = 1;currentLight = currentLight + 1;
      box52.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[1] = 0;currentLight = currentLight - 1;
      box52.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "cincoquatro"){//Row 5, column 4
    changeLight(event, 5, 3);
    if (lightArray4[3] == 0){
      lightArray4[3] = 1;currentLight = currentLight + 1;
      box44.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[3] = 0;currentLight = currentLight - 1;
      box44.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[4] == 0){
      lightArray5[4] = 1;currentLight = currentLight + 1;
      box55.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[4] = 0;currentLight = currentLight - 1;
      box55.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[2] == 0){
      lightArray5[2] = 1;currentLight = currentLight + 1;
      box53.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[2] = 0;currentLight = currentLight - 1;
      box53.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if (boxyRes == "cincocinco"){//Row 5 Column 5
    changeLight(event, 5, 4);
    if (lightArray4[4] == 0){
      lightArray4[4] = 1;currentLight = currentLight + 1;
      box45.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray4[4] = 0;currentLight = currentLight - 1;
      box45.style.backgroundColor = "rgb(145, 145, 145)";
    }if (lightArray5[3] == 0){
      lightArray5[3] = 1;currentLight = currentLight + 1;
      box54.style.backgroundColor = "rgb(255, 255, 0)";
    }else{
      lightArray5[3] = 0;currentLight = currentLight - 1;
      box54.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }
  boyoResponse.innerHTML = "Current turns: "+ turnNumber;
  if (currentLight == 0){
    boyoResponse.innerHTML = "You win! Current turns: "+ turnNumber;
  }
}

function changeLight(event, row, col){
  turnNumber  = turnNumber + 1;
  if (row == 1){
    if(lightArray1[col] == 0){
      lightArray1[col] = 1;currentLight = currentLight + 1;
      event.target.style.backgroundColor = "rgb(255, 255, 0)";
    } else{
      lightArray1[col] = 0;currentLight = currentLight  -1;
      event.target.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if(row == 2){
    if(lightArray2[col] == 0){
      lightArray2[col] = 1;currentLight = currentLight + 1;
      event.target.style.backgroundColor = "rgb(255, 255, 0)";
    } else{
      lightArray2[col] = 0;currentLight = currentLight  -1;
      event.target.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if(row == 3){
    if(lightArray3[col] == 0){
      lightArray3[col] = 1;currentLight = currentLight + 1;
      event.target.style.backgroundColor = "rgb(255, 255, 0)";
    } else{
      lightArray3[col] = 0;currentLight = currentLight  -1;
      event.target.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if(row == 4){
    if(lightArray4[col] == 0){
      lightArray4[col] = 1;currentLight = currentLight + 1;
      event.target.style.backgroundColor = "rgb(255, 255, 0)";
    } else{
      lightArray4[col] = 0;currentLight = currentLight  -1;
      event.target.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }else if(row == 5){
    if(lightArray5[col] == 0){
      lightArray5[col] = 1;currentLight = currentLight + 1;
      event.target.style.backgroundColor = "rgb(255, 255, 0)";
    } else{
      lightArray5[col] = 0;currentLight = currentLight  -1;
      event.target.style.backgroundColor = "rgb(145, 145, 145)";
    }
  }
}

function ozzyOsbourne() {
  turnNumber = 0;
  currentLight = 0;
  boyoResponse.innerHTML = "Good luck soldier.";
  var uNum = Number(txtName.value);
  if (uNum == 1){
    lightArray5[3] = 1;currentLight = currentLight + 1;
    box54.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[4] = 1;currentLight = currentLight + 1;
    box55.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[2] = 1;currentLight = currentLight + 1;
    box53.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[3] = 1;currentLight = currentLight + 1;
    box44.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[2] = 1;currentLight = currentLight + 1;
    box33.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[3] = 1;currentLight = currentLight + 1;
    box34.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[1] = 1;currentLight = currentLight + 1;
    box32.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[2] = 1;currentLight = currentLight + 1;
    box43.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[2] = 1;currentLight = currentLight + 1;
    box23.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray1[0] = 1;currentLight = currentLight + 1;
    box11.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[1] = 1;currentLight = currentLight + 1;
    box22.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray1[2] = 1;currentLight = currentLight + 1;
    box13.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray1[1] = 1;currentLight = currentLight + 1;
    box12.style.backgroundColor = "rgb(255, 255, 0)";
  }else if (uNum == 2){
    lightArray1[1] = 1;currentLight = currentLight + 1;
    box12.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray1[3] = 1;currentLight = currentLight + 1;
    box14.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[1] = 1;currentLight = currentLight + 1;
    box22.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[3] = 1;currentLight = currentLight + 1;
    box24.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[1] = 1;currentLight = currentLight + 1;
    box42.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[3] = 1;currentLight = currentLight + 1;
    box44.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[1] = 1;currentLight = currentLight + 1;
    box52.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[3] = 1;currentLight = currentLight + 1;
    box54.style.backgroundColor = "rgb(255, 255, 0)";
  }else if (uNum == 3){
    lightArray1[1] = 1;currentLight = currentLight + 1;
    box12.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray1[3] = 1;currentLight = currentLight + 1;
    box14.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[0] = 1;currentLight = currentLight + 1;
    box21.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[0] = 1;currentLight = currentLight + 1;
    box31.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[0] = 1;currentLight = currentLight + 1;
    box41.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[1] = 1;currentLight = currentLight + 1;
    box32.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[1] = 1;currentLight = currentLight + 1;
    box52.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray2[4] = 1;currentLight = currentLight + 1;
    box25.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[4] = 1;currentLight = currentLight + 1;
    box35.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray4[4] = 1;currentLight = currentLight + 1;
    box45.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray3[3] = 1;currentLight = currentLight + 1;
    box34.style.backgroundColor = "rgb(255, 255, 0)";
    lightArray5[3] = 1;currentLight = currentLight + 1;
    box54.style.backgroundColor = "rgb(255, 255, 0)";
  }
}
