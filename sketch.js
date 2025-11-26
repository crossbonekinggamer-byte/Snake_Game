// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var scl = 20;


var score;
var food;

var paused = false;

function setup() {
  createCanvas(1440, 778);
  s = new Snake();
  frameRate(10);
  pickLocation();


}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
function mousePressed() {
  s.total++;
}

function draw() { 
  if (paused === true){
  textSize(50);
  textStyle(BOLDITALIC)
  textAlign(CENTER, CENTER)
  fill(0)
  text('GAME PAUSED', width/2, height/2)
  fill('white')
  text('GAME PAUSED', width/2 + 3, height/2 - 3)
  rectMode(CENTER)
  fill('gray')
  rect(width/2 + 5, height/2 + 48, 200, 50)
  textAlign(CENTER,CENTER)
  textSize(40)
  textStyle(BOLD)
  fill(0)
  text('RESUME', width/2 + 5,height/2 + 50)
  }else{
  background(51)
  fill(255)  
    }
  
 if (s.eat(food)) {
    pickLocation();
    score++;
  }
  if (s.death()) {
    score = 0;
  }

  s.death();
  s.update();
  s.show();


  push();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  pop();
  
  push();
  fill(255)
  textSize(24);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 5, 5);
  pop();
}



function keyPressed() {
  if (key === 'p') {
    if(paused === false) {
      paused = true;
    } else {
      paused = false;
    }
  }
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (key === 'r' || key === 'R') {
    location.reload();
  }


}
function mouseClicked() {
  if (mouseX > width/2 - 95) {
    if (mouseX < width/2 + 105) {
      if (mouseY > height/2 + 25) {
        if (mouseY < height/2 + 75) {
          if(paused = true){
   paused = false;}
        }
      }
    }
  }
}
