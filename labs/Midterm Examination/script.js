var circleSquad = {
  yPos: 10, //Y position for all circles.
  xPos: [30,60,90,120,150,180,210,240,270,300], //X position of each circle.
  cCol: [0,0,0,0,0,0,0,0,0,0], //Color of each circle.
  cRad: [0,0,0,0,0,0,0,0,0,0] //Radius of each circle.
};
function setup() { //Just makes the canvas.
  createCanvas(600,600); 
}

function draw(){
  background(200,200,200); //Reset the screen.
  circleSquad.yPos = mouseY;
  for (i = 0; i < circleSquad.xPos.length; i++) {
    circleSquad.cCol[i] = 100;

    circleSquad.cCol[i] =  1000 / (0.4*(circleSquad.xPos[i] - mouseX));
    if (circleSquad.cCol[i] >= 255){
      circleSquad.cCol[i] = 255;}
    else if (circleSquad.cCol[i] <= 0){
      circleSquad.cCol[i] = 0 - circleSquad.cCol[i];}

    fill(circleSquad.cCol[i],circleSquad.cCol[i],circleSquad.cCol[i]);
    circleSquad.cRad[i] =  1000 / (0.4*(circleSquad.xPos[i] - mouseX));
    if (circleSquad.cRad[i] >= 100){
      circleSquad.cRad[i] = 100;}
    else if (circleSquad.cRad[i] <= -100){
      circleSquad.cRad[i] = 100;}
    drawCircle(i,circleSquad.cCol[i]);
  }
}

function drawCircle(x,Rad){
  circle(circleSquad.xPos[x],circleSquad.yPos,circleSquad.cRad[x]);
}