let hissX = [0,0,0,0,0,0,0,0,0,0,0]
let hissY = [0,0,0,0,0,0,0,0,0,0,0]

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill("blue");
  noStroke();
  ellipse(mouseX,mouseY, 30, 30);
  hissX.unshift(mouseX);
  hissY.unshift(mouseY);
  for( let i = 0; i < 10; i++) {
    ellipse(hissX[i],hissY[i],30,30)
  }
}