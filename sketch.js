function preload(){
  // put preload code here
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  frameRate(35);
}

function draw() {
  push();
  translate(width/2, height/2);

// figura centrale
  stroke(lerpColor(color("yellow"), color("red"),frameCount/120));
  strokeWeight(3);

  var r = 150
  line(r, 0, r*cos(frameCount*3), r*sin(frameCount*3));

// cerchi ipnotici
  stroke(240);
  noFill();
  strokeWeight(1);

  ellipse(-width/4, -height/4, r*sin(frameCount*3), r*sin(frameCount*3));
  ellipse(width/4, -height/4, r*sin(frameCount*3), r);
  ellipse(width/4, height/4, r*cos(frameCount*3), r*cos(frameCount*3));
  ellipse(-width/4, height/4, r, r*sin(frameCount*3));

  if (frameCount == 120){
    noLoop();
    }

  pop();



}
