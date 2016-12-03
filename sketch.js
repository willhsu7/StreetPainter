var can;
//var canImg;
var thewall;

var canvas;

function preload() {
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
} //load the can image

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} // make the window size changable 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(255);
  //can = createSprite(width/2, height/2);

  image(can, 600, 0);
  image(thewall, 0, 150);
}

function draw() {
  //background(51);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(15);
  } // draw the line
  
  //image(can, mouseX, mouseY);

  /*ellipse(mouseX, mouseY,26, 26);
  
  can.position.x = mouseX;
  can.position.y = mouseY;
  if(mouseIsPressed){
    can.rotation += 1.5;
  }*/
  //drawSprites();
}

function keyPressed() {
  clear();
}

