var x;
var i;

function setup() {
  createCanvas(800,600);
  noStroke();
  i = 0;
  background(255,255,255);
  for (i = 1; i < 26; i++) {
    if (((i % 3) + (i % 5)) == 0) {
      fill(0, 21, 255);
      rect((i*20 - 10), 290, 20, 20);
    } 
    else if ((i % 3) == 0) {
      fill(165, 3, 252);
      ellipse((i * 20), 300, 20, 20);
    } 
    else if ((i % 5) == 0) {
      fill(68, 255, 0);
      rect((i*20 - 10), 290, 20, 20);
    } 
    else {
      fill(100,100,100);
      ellipse((i * 20), 300, 20, 20);
    }
  }
}

function draw() {
}