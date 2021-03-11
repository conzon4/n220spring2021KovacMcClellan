var myShape = {
  boundary: 500,
  width:50,height:50,
  posX:225,posY:225,
  red:200,green:50,blue:50,
};
function setup() {
  createCanvas(myShape.boundary, myShape.boundary);
}
function draw(){
  fill(myShape.red,myShape.green,myShape.blue);
  ellipse(myShape.posX,myShape.posY, myShape.width,myShape.height);
  myShape.width = myShape.width + 1;
  myShape.height = myShape.height + 1;
}