function setup() {
    createCanvas(800, 600);
    var TankyBoi = "#eae5c3";
    var WheelBoi = "#404040";

    fill(WheelBoi);
    circle(30,50,25);
    circle(80,50,25);
    circle(55,50,25);

    fill(TankyBoi); //A sort of beige. Normal "beige" was too light.
    stroke(234, 229, 195); //Same beige, but just did to show i know the rgb values and stroke.
    rect(15, 25, 80, 20);
    rect(35, 5, 40, 20);
    rect(75, 15, 40, 5);
    noStroke();
    rect(0, 60, 100, 60);

    fill("gray");
    rect(0, 60, 100, 10);

    fill("blue");
    rect(100, 60, 100, 60);
}  