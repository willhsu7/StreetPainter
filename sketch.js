var can;
var lineSizeSlider; // switch the strokeWeight of drawing line
var c; //stroke colors 

//scenes&background
var thewall;
var grafsound;
var nyutandon;
var nyt;
var bowerymural;

var topbackground;
var police;
var xpos = -100; //position for the police
var worldmap;
var streetview;

function preload() {
  topbackground = loadImage('./assets/topbackground.png');
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
  nyutandon = loadImage('./assets/tandonnyu.jpg');
  nyt = loadImage('./assets/nyt.jpg');
  bowerymural = loadImage('./assets/BoweryMural.jpg')

  police = loadImage('./assets/police.png');
  worldmap = loadImage('./assets/worldmap.jpg');
  streetview = loadImage('Streetview.jpg');
  grafsound = loadSound('./assets/GRAFFITI_SOUND.mp3');

} //load the images & audio 

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1150, 1150);
  background(200);

  resetSketch(); // reset the canvas 
  image(thewall, 0, 400);

  var button = createButton("clear the canvas"); //create the clear button
  button.mousePressed(resetSketch);
  button.size(100, 50);
  button.position(10, 10);


  lineSizeSlider = createSlider(20, 70, 20); //create a slider(min, max, default value)
  lineSizeSlider.position(10, 70);

  var snapbutton = createButton('snap the street view'); // button for screen shot 
  //snapbutton.position(10, 200);
  snapbutton.position(110, 10);
  snapbutton.size(100, 50);
  snapbutton.mousePressed(snapCanvas);

  var changebackground = createButton('NYU Tandon'); //change scenes to draw 
  changebackground.mousePressed(newScenes);
  changebackground.position(610, 465);
  changebackground.size(50, 30);

  var changebackground2 = createButton('New York Times'); //change scenes to draw 
  changebackground2.mousePressed(newScenesNYT);
  changebackground2.position(500, 200);
  changebackground2.size(50, 40);

  var changebackground3 = createButton('Bowery Mural'); //change scenes to draw 
  changebackground3.mousePressed(newScenesBoweryMural);
  changebackground3.position(520, 270);
  changebackground3.size(40, 40);

  //image(streetview);
}

function resetSketch() { // function to clear & reset the sketch canvas  
  //canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(1150, 1150);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(200);
  image(thewall, 0, 370);

}

function newScenes() {
  image(nyutandon, 0, 420);
}

function newScenesNYT() {
  image(nyt, 0, 420);
}

function newScenesBoweryMural() {
  image(bowerymural, 0, 420);
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
  image(worldmap, 340, 90);
  
    xpos = xpos +2; 
  image(police, xpos, 500);
     if(xpos > width)
  { 
    xpos = -100;
  } //reset the position  
  

  //policeman.display();
  //policeman.run();
  } 

//image(thewall, 0, 150);

//image(can, mouseX, mouseY);
/*ellipse(mouseX, mouseY,26, 26);
can.position.x = mouseX;
can.position.y = mouseY;
if(mouseIsPressed){
  can.rotation += 1.5;
}*/
//drawSprites();

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

function mousePressed() { //when mouse is pressed trigger graffiti sound
  grafsound.setVolume(0.7);
  grafsound.play();
  //grafsound.loop();
  grafsound.jump(11, 1); // jump(cueTime of the soundFile in seconds, duration in seconds)
}

function keyPressed() { //changing colors 
  c = color(random(0, 255), random(0, 255), random(0, 255));
}

//policeman
/*function policeman() { 
  this.xpos = 0;
  this.speed = 2;
  this.display = function() {
    image(police, xpos, 500);
  }
  this.run = function() {
    this.xpos = this.xpos + this.speed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }*/

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