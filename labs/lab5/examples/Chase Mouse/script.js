let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200,200,200);
  adjust(mouseX, mouseY)
  circle(x, y, 20);
}

function adjust(a,b) {
  if (x < a - 3){
    x = x + 3;}
  else if (x > a + 3){
    x = x - 3;}
  if (y < b - 3){
    y = y + 3;}
  else if(y > b + 3){
    y = y - 3;}
  if(((a-x)<7)&&((a-x)>-7)&&((b-y)<7)&&((b-y)>-7)){
    fill(200,0,0);// If within 7 x and y, color red.
  }
  else{
    fill(0);}//Otherwise, color black.
}