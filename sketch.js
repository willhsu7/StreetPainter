var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
background(255);
}


function draw() {
  
  if (mouseIsPressed) {
    strokeWeight(20);
     stroke(245, 10, 30);
    line(pmouseX, pmouseY, mouseX, mouseY);
  
  }

}

function keyPressed() {
  clear();
}