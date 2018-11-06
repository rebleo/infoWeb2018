let theX = 100;
let theY = 200;
// create a boolean to make a state/switch
let theUser = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 160, 200);
  fill(255, 0, 0, 50);
  rect(75, 100, 50, 50);
  triangle(50, 300, 100, 250, 150, 300);
  // push + pop - line 23 - are used around elements for different
  // styling or affects - try commenting them out and see what happens
  push();
  fill(0, 0, 255);
  rotate(.5);
  rect(150, 150, 300, 30);
  pop();
  ellipse(theX, theY, 50, 50);
  // console.log(theUser);
}
// EVENT FUNCTIONS - p5 has a lot of build in functions
// https://p5js.org/reference/#/p5/keyPressed
// if the user pressed RIGHT_ARROW - the ellipse will go to the edge of the window
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    theX = windowWidth;
  } else if (keyCode === LEFT_ARROW) {
    theX = 0
  }
}
