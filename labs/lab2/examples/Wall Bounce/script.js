var x;
var y;
var xSpeed;
var ySpeed;

function setup() {
  createCanvas(800,600);
  xSpeed = 5;
  ySpeed = 5;
  x = 15;
  y = 15;
}

function draw() {
  background(255,255,255);
  line(0,1,800,1);
  line(1,1,1,600);
  line(0,599,800,599);
  line(799,1,799,599);
  fill(252, 65, 3);
  x = x + xSpeed;
  if (x == 785 || x == 15){
    xSpeed = (xSpeed * -1);
  }
    y = y + ySpeed;
  if (y == 585 || y == 15){
    ySpeed = (ySpeed * -1);
  }
  ellipse(x, y, 30, 30);
}