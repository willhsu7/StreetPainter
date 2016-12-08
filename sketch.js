var can;
var thewall;
var c; //stroke colors 
var lineSizeSlider; // switch the strokeWeight of drawing line


//Google Maps API Key: AIzaSyAZl5MK8OWAPexNhbln2rcP1-quo856SRQ

function preload() {
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
} //load the images

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  resetSketch(); // reset the canvas 
  image(thewall, 0, 150);
  var button = createButton("clear the canvas"); //create the clear button
  button.mousePressed(resetSketch);
  //create a slider(min, max, default value)
  lineSizeSlider = createSlider(10, 70, 20);


}

function resetSketch() { // function to clear & reset the sketch canvas  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(200);
  image(thewall, 0, 150);
}

function draw() {
  //background(51);
  //display instructions
  noStroke();
  fill(200);
  rect(0, 100, 1144, 50);
  fill(0);
  text("Draw whatever you love! Press the keys on your keyboard to change the colors, have fun!", 10, 130);
  textSize(20);
  //image(thewall, 0, 150);
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
  var scribble = new Scribble(); // Create an instance: p5.scribble.js library
  scribble.bowing = 2; // changes the bowing of lines
  scribble.roughness = 4; // changes the roughness of lines
  scribble.scribbleLine(pmouseX, pmouseY, mouseX, mouseY);

  //line(pmouseX, pmouseY, mouseX, mouseY);
  //ellipse(mouseX, mouseY, 15, 15);
  //strokeWeight(30);
  strokeWeight(lineSizeSlider.value());
  stroke(c, 0.5);

}

function keyPressed() { //changing colors 
  c = color(random(0, 255), random(0, 255), random(0, 255));
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
}*/