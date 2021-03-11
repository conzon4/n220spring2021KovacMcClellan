let dripY = [0]

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  fill("grey");
  line(0,1,600,1);
  line(1,1,1,600);
  line(0,599,600,599);
  line(599,1,599,599);
  fill("blue");
  for( let i = 0; i < dripY.length; i++) {
    dripY[i] = dripY[i] + 5;
    ellipse(50,dripY[i],10,10)
  }
  if (dripY[0] == 50){
    dripY.unshift(0);
  }
}