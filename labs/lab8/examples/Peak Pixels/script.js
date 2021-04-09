let boxyBoy = document.getElementById("boxyBoy");

boxyBoy.style.backgroundColor = "#03fc28";
boxyBoy.style.width = "100px";
boxyBoy.style.height = "100px";
boy1 = 100;

function onClick() {
  boy1 = boy1 * 1.1;
  boxyBoy.style.height = boy1 + "px";
  boxyBoy.style.width = boy1 + "px";
}