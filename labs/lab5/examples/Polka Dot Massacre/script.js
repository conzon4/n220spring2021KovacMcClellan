let x = 0;
let y = 0;
let z = 0;

function setup() {
  createCanvas(600, 600);
  background(200,200,200);
}

function draw(){
  colorRoll(mouseX%4, mouseY%4, (mouseX+mouseY)%4);
  fill(x,y,z); //Fill with a randomized color.
}

function colorRoll(a,b,c){//Produce a random color that
  x = x + a;              //progresses based on mouse
  y = y + b;              //positioning.
  z = z + c;           
  if(x > 255){//When an RGB value goes over 255, reset.
    x = 0;}
  if(y > 255){
    y = 0;}
  if(z > 255){
    z = 0;}
}

function mouseClicked() { // On click, produce circle.
  circle(mouseX, mouseY, 10);
}