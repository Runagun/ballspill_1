//GLOBALE VARIABLER
let ballx = 225;
let bally = 225;
let ballSize = 50;
let fart = 1;
let poeng = 0;

function setup() {            //Dette skjer én gang.
  createCanvas(windowWidth, windowHeight);    
  textAlign(CENTER);
  textSize(20);
}  //SLUTT SETUP ---------------------------------

function draw() {            //Dette skjer i loop.
  background(220);
  ball();
  tekst();
}  //SLUTT DRAW ----------------------------------

function ball() {
  ellipse(ballx,bally,ballSize,ballSize);
  ballx = ballx - fart;
  if (ballx <= 0-(ballSize/2)) {
    ballx = windowWidth+(ballSize/2);
  }  
}  //SLUTT BALL ----------------------------------

function mouseReleased() {
  let avstandBall = dist(ballx, bally, mouseX, mouseY);
  if (avstandBall < ballSize) {
    fill('green');
    fart = fart + 1;
    bally = random(ballSize/2, (windowHeight-ballSize/2));
    poeng = poeng + 1;
  }
  if (avstandBall > ballSize) {
    fill('red');
    poeng = poeng - 1;
  }
}  //SLUTT MOUSERELEASE --------------------------

function tekst() {
  text("Poeng: " + poeng, windowWidth/2, 40);
}





