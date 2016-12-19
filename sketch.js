var can;
var lineSizeSlider; // switch the strokeWeight of drawing line
var c; //stroke colors 

//scenes&background
var thewall;
var grafsound; //graffiti spray sounds
var nyutandon;
var nyt;
var bowerymural;
var halloffame;
var rooftop;
var subtunnel;
var subway;

var topbackground;
var downbackground;
var police;
var xpos = 10; //position for the police
var worldmap;
var streetview; //the snapshot image
var music; //background music
var brush = 0;

function preload() {
  topbackground = loadImage('./assets/topbackground.png');
  downbackground = loadImage('./assets/downbackground.png');
  can = loadImage('./assets/can_painter.png');
  thewall = loadImage('./assets/shanghai-bicycle-street-photography.jpg');
  nyutandon = loadImage('./assets/bushwick.jpg');
  nyt = loadImage('./assets/audubon_mural_project.jpg');
  bowerymural = loadImage('./assets/BoweryMural.jpg');
  halloffame = loadImage('./assets/halloffame.jpg');
  rooftop = loadImage('./assets/rooftop.jpg');
  subtunnel = loadImage('./assets/subway_tunnel.jpg');
  subway = loadImage('./assets/subway.jpg');

  police = loadImage('./assets/police.png');
  worldmap = loadImage('./assets/worldmap.jpg');
  streetview = loadImage('Streetview.jpg');
  grafsound = loadSound('./assets/GRAFFITI_SOUND.mp3');
  //music = loadSound('./assets/DropItLikeItsHot.mp3')
} //load the images & audio 

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1150, 1150);
  background(200);

  //music.play(); //play the background music
  //music.loop();

  resetSketch(); // reset the canvas 

  //image(thewall, 0, 400);
  image(downbackground, 0, 400);
  var button = createButton("clear the canvas"); //create the clear button
  button.mousePressed(resetSketch);
  button.size(100, 50);
  button.position(10, 10);

  var snapbutton = createButton('snap the street view'); // button for screen shot 
  //snapbutton.position(10, 200);
  snapbutton.position(110, 10);
  snapbutton.size(100, 50);
  snapbutton.mousePressed(snapCanvas);

  lineSizeSlider = createSlider(5, 50, 10); //create a slider(min, max, default value)
  lineSizeSlider.position(10, 70);

  var changebackground = createButton('Bushwick Collective'); //change scenes to draw 
  changebackground.mousePressed(newScenes);
  changebackground.position(710, 380);
  changebackground.size(60, 40);

  var changebackground2 = createButton('Audubon Mural'); //change scenes to draw 
  changebackground2.mousePressed(newScenesNYT);
  changebackground2.position(500, 200);
  changebackground2.size(60, 40);

  var changebackground3 = createButton('Bowery Mural'); //change scenes to draw 
  changebackground3.mousePressed(newScenesBoweryMural);
  changebackground3.position(520, 270);
  changebackground3.size(40, 40);

  var changebackground4 = createButton('Graffiti Hall of Fame');
  changebackground4.mousePressed(newSceneshalloffame);
  changebackground4.position(630, 105);
  changebackground4.size(60, 40);

  var changebackground5 = createButton('China Town Rooptop');
  changebackground5.mousePressed(newScenesrooftop);
  changebackground5.position(600, 305);
  changebackground5.size(60, 40);

  var changebackground6 = createButton('Tunnel of Subway');
  changebackground6.mousePressed(newScenestunnel);
  changebackground6.position(550, 380);
  changebackground6.size(60, 40);

  var changebackground7 = createButton('NY subway');
  changebackground7.mousePressed(newScenessubway);
  changebackground7.position(470, 380);
  changebackground7.size(60, 40);

  //image(streetview);

  //switching drawing effects
  var scribblebutton = createButton('Scribble Brush');
  scribblebutton.position(210, 10);
  scribblebutton.size(50, 50);
  scribblebutton.mousePressed(brush0);

  var linebutton = createButton('Line Brush');
  linebutton.position(260, 10);
  linebutton.size(50, 50);
  linebutton.mousePressed(brush1);

  var roundbutton = createButton('Round Brush');
  roundbutton.position(310, 10);
  roundbutton.size(50, 50);
  roundbutton.mousePressed(brush2);

}

function brush0() {
  brush = 0;
}

function brush1() {
  brush = 1;
}

function brush2() {
  brush = 2;
}

function resetSketch() { // function to clear & reset the sketch canvas  
  //canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(1150, 1150);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(200);
  //image(thewall, 0, 400);
  image(downbackground, 0, 400);
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

function newSceneshalloffame() {
  image(halloffame, 0, 420);
}

function newScenesrooftop() {
  image(rooftop, 0, 420);
}

function newScenestunnel() {
  image(subtunnel, 0, 420);
}

function newScenessubway() {
  image(subway, 0, 420);
}

function snapCanvas() { // screen shot the canvas 
  saveCanvas('Streetview.jpg', 'jpg');
  xpos = xpos + 2;
  image(police, xpos, 700);
  if (xpos > width) {
    xpos = 10;
  } //reset the position  

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
  //image(worldmap, 340, 90);
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

  /*var scribble = new Scribble(); // Create an instance: p5.scribble.js library
  scribble.bowing = 1.5; // changes the bowing of lines
  scribble.roughness = 2.5; // changes the roughness of lines
  scribble.scribbleLine(pmouseX, pmouseY, mouseX, mouseY);*/

  if (brush == 1) {
    line(pmouseX, pmouseY, mouseX, mouseY);
   
  } else if (brush == 2) {
    ellipse(mouseX, mouseY, 20, 15);
    noStroke();
    
  } else if (brush === 0) {
    var scribble = new Scribble(); // Create an instance: p5.scribble.js library
    scribble.bowing = 1.5; // changes the bowing of lines
    scribble.roughness = 2.5; // changes the roughness of lines
    scribble.scribbleLine(pmouseX, pmouseY, mouseX, mouseY);

  }

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
  if (key == 'w' || key == 'W') { // white
    c = color(255, 255, 255);
  } else
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