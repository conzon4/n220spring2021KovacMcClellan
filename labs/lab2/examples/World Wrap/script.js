var x;
var length;

function setup() {
  createCanvas(800,600);
  noStroke();
  length = 0;
}

function draw() {
  background(255,255,255);
  fill(100,100,100);
  length = length +5;
  if (length == 800){
    length = 0;
  }
  ellipse(length, 300, 30, 30);
}