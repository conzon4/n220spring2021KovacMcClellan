var x;
var i;

function setup() {
  createCanvas(800,600);
  noStroke();
  background(255,255,255);
  fill(255, 13, 0);
  for (i = 1; i < 5; i++) {
    for (x = 0; x < i; x++){
    rect(((x * 21) + 10), (i * 21), 20, 20);
    }
  }
}

function draw() {
}