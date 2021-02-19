let color = [ "#f1b8ff", "#a38368", "#feffb8"]

function setup() {
  createCanvas(800, 600);
  background(25,75,150);
  
  for(let i = 0; i < color.length; i++) {
    fill(color[i]);
    rect(i * 50, 50, 50, 50)
  }
}

function draw() {

}