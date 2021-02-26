let color = [ "#ff001e", "#fffb00", "#00ff04"];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(204);
  fill(100,100,100);
  rect(10,10,40,120);
  rect(25,130,10,100);
  for(let i = 0; i < color.length; i++) {
    light(30,i*40+30,i);
  }
}

function light(x,y,z) {
  fill(color[z]);
  circle(x, y, 35);
}