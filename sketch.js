var can;
var thewall;
var c; //stroke colors 
var lineSizeSlider; // switch the strokeWeight of drawing line
var snapbutton;
var grafsound;
var nyutandon;
var topbackground;
var police; 
var xpos = -100; //position for the police

function preload() {
  topbackground = loadImage('./assets/topbackground.png');
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
  nyutandon = loadImage('./assets/tandonnyu.jpg');
  police = loadImage('./assets/police.png')
  grafsound = loadSound('./assets/GRAFFITI_SOUND.mp3');
 
} //load the images & audio 

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1150, 1150);
  background(200);

  resetSketch(); // reset the canvas 
  image(thewall, 0, 350);

  var button = createButton("clear the canvas"); //create the clear button
  button.mousePressed(resetSketch);
  button.size(100, 50);
  button.position(10, 150);
  
  lineSizeSlider = createSlider(20, 70, 20);//create a slider(min, max, default value)
  lineSizeSlider.position(110, 150);

  snapbutton = createButton('snap the street view'); // button for screen shot 
  snapbutton.position(10, 200);
  snapbutton.size(100, 50);
  snapbutton.mousePressed(snapCanvas);
  
  var changebackground = createButton('Other Scenes'); //change scenes to draw 
  changebackground.mousePressed(newScenes);
  changebackground.position(10, 250);
  changebackground.size(100, 50);
}

function resetSketch() { // function to clear & reset the sketch canvas  
  //canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(1150, 1150);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(200);
  image(thewall, 0, 350);
}

function newScenes(){
  image(nyutandon, 0, 350);
}

function snapCanvas() { // screen shot the canvas 
  
  saveCanvas('Streetview.jpg', 'jpg');
}

function draw() {
  //background(51);
  //display instructions
  //image(thewall, 0, 350);
  noStroke();
  fill(200);
  rect(0, 100, 1144, 50);
  fill(0);
  text("Draw whatever you love! Press the keys on your keyboard to change the colors, have fun!", 10, 130);
  textSize(20);
  
  image(topbackground, 0);
  
  xpos = xpos +2; 
  image(police, xpos, 100);
     if(xpos > width)
  { 
    xpos = -10;
  } //reset the position  
  
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

function mousePressed(){   //when mouse is pressed trigger graffiti sound
  grafsound.setVolume(0.7);
  grafsound.play();
  //grafsound.loop();
  grafsound.jump(11, 1); // jump(cueTime of the soundFile in seconds, duration in seconds)
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