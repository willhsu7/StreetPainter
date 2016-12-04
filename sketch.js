var can;
var thewall;
var c; //stroke colors 

//Google Maps API Key: AIzaSyAZl5MK8OWAPexNhbln2rcP1-quo856SRQ

function preload() {
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
} //load the can image

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(200);
  resetSketch(); // reset the canvas 
  //image(can, 600, 0); 
  image(thewall, 0, 150);

  var button = createButton("clear the canvas"); //create the clear button
  button.mousePressed(resetSketch);
}

function resetSketch() { // function to clear & reset the sketch canvas  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(200);
  //image(can, 600, 0);
  image(thewall, 0, 150);
}

function draw() {
  //background(51);
  // display instructions
  noStroke();
  fill(200);
  rect(0, 100, 1144, 50);
  fill(0);
  text("Draw whatever you love! Press the keys on your keyboard to change the colors, have fun!", 10, 130);
  textSize(20);
  //image(can, mouseX, mouseY);
  /*ellipse(mouseX, mouseY,26, 26);
  can.position.x = mouseX;
  can.position.y = mouseY;
  if(mouseIsPressed){
    can.rotation += 1.5;
  }*/
  //drawSprites();
}

function mouseDragged() {
  line(pmouseX, pmouseY, mouseX, mouseY);
  strokeWeight(30);
  stroke(c);
}

function keyPressed(){
  c= color(random(0, 255), random(0, 255), random(0, 255));
}

/*function keyPressed() {
  if (key == 'r' || key == 'R') { // red
    c = color(242, 25, 5);
  }
  if (key == 'b' || key == 'B') { //blue
    c = color(46, 136, 255);
  }
  if (key == 'g' || key == 'G') { //green
    c = color(46, 218, 26);
  }
  if (key == 'o' || key == 'O') { //orange
    c = color(255, 82, 2);
  }
  if (key == 'p' || key == 'P') { //purple
    c = color(186, 21, 207);
  }
  if (key == 'y' || key == 'Y') { //yellow
    c = color(255, 255, 0);
  }
  if (key == 'f' || key == 'F') { //gray
    c = color(96, 96, 96);
  }
  if (key == 'w' || key == 'W') { //white
    c = color(255);
  }
  if (key == 'j' || key == 'J') { //black
    c = color(0);
  }
}*/