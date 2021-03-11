var myShape = {
  boundary: 500,
  width:50,height:50,
  posX:225,posY:225,
  red:100,green:100,blue:100,
};
function setup() {
  createCanvas(myShape.boundary, myShape.boundary);
}
function draw(){
  fill(myShape.red,myShape.green,myShape.blue);
  ellipse(myShape.posX,myShape.posY, myShape.width,myShape.height);
}
