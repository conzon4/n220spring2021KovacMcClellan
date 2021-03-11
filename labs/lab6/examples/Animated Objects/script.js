function buddy(x, y, z) {
  this.posX = x;
  this.posY = y;
  this.rad = z;
}

let Shapes = [
  shape1 = new buddy(25,25,25),
  shape2 = new buddy(50,25,25),
  shape3 = new buddy(25,50,25),
  shape4 = new buddy(50,50,25)
]

function setup() {
  createCanvas(500,500);
  fill(100,100,100);
}

function draw(){
  background(0,0,0);
  for (var i = 0; i < Shapes.length; i++) {
    Shapes[i].posX = Shapes[i].posX + 1;
    Shapes[i].posY = Shapes[i].posY + 1;
  }
  circle(Shapes[0].posX,Shapes[0].posY,Shapes[0].rad)
  circle(Shapes[1].posX,Shapes[1].posY,Shapes[1].rad)
  circle(Shapes[2].posX,Shapes[2].posY,Shapes[2].rad)
  circle(Shapes[3].posX,Shapes[3].posY,Shapes[3].rad)
}