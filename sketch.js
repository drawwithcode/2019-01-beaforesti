function preload(){
  // put preload code here
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(25, 25, 112);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(35);
}

function draw() {
  var r = 150

  translate(width/2, height/2);

// figura centrale
if (frameCount < 300) {
  stroke(lerpColor(color(255,215, 0), color(25, 25, 112),frameCount/100));
  strokeWeight(4);

  line(r, 0, r*cos(frameCount*6), r*sin(frameCount*6));
  line(-r, 0, r*-cos(frameCount*3), r*-sin(frameCount*3));
}

// figure ipnotiche
noFill();
strokeWeight(1);

if (frameCount > 300 && frameCount < 360) {
  stroke(255, 5, 0);
  ellipse(0, 0, r*sin(frameCount*3), r);
}

// cambio colore sfondo
if (frameCount == 360){
    background(255, 5, 0);
}

if (frameCount > 360 && frameCount < 420){
  stroke(255, 215, 0)
  rect(0, 0, r*cos(frameCount*3), r*cos(frameCount*3));
    }

if (frameCount == 420){
    background(255, 215, 0);
    }

if (frameCount > 420 && frameCount < 500){
  stroke(255, 5, 0)
  ellipse(0, 0, r, r*sin(frameCount*3));
}

if (frameCount == 500){
    background(255, 5, 0);
    }

if (frameCount > 500 && frameCount < 650){
  push();
  strokeWeight(3)
    stroke(240, 100, 150);
    line(0, r, r*cos(frameCount*3), r*sin(frameCount*3));
  pop();
  }

if (frameCount > 650 && frameCount < 800) {
      stroke(255, 215, 0);

      rotate(frameCount*3);
      rect(0, 0, sin(100-frameCount)*r*2, sin(100-frameCount)*r*2, 50);
      //rect(0, 0, 300*sin(r-frameCount), 300*sin(r-frameCount), 50);
    }

else if (frameCount == 1000){
    noLoop();
  }
}
