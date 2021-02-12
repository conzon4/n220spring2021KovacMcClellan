var i;

function setup() {
  createCanvas(400,400);
  noStroke();
  background(200,200,200);
  stroke(0);
  fill(245, 242, 242);
  for (i = 380; i > 0; i = (i - 10)) {
    ellipse(200, 200, i, i);
  }
}

function draw() {
}