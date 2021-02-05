var x;

function setup() {
  createCanvas(400, 300);
  noStroke();
}

function draw() {
  background(255,255,255);
  if (mouseX > 200) {
    fill(235, 64, 52)
  }
  else{

    fill(52, 70, 235);
  }
  ellipse(mouseX,mouseY, 30, 30);
}