let boxyBoy = document.getElementById("boxyBoy");

boxyBoy.style.backgroundColor = "rgb(3, 28, 252)";
boxyBoy.style.width = "100px";
boxyBoy.style.height = "100px";
boy1 = 100;

function onMouseover() {
  boxyBoy.style.backgroundColor = "rgb(0, 0, 0)";
}

function onMouseoff() {
  boxyBoy.style.backgroundColor = "rgb(0, 0, 255)";
}