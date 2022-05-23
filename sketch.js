var mgr;
let images = [];

function preload(){
  defaultFont = loadFont('Domine-Regular.ttf');

  //consider a loop here??
  images[0] = loadImage('Assets/1.png');
  images[1] = loadImage('Assets/2.png');
  images[2] = loadImage('Assets/3.png');
  images[3] = loadImage('Assets/4.png');
  images[4] = loadImage('Assets/5.png');
  images[5] = loadImage('Assets/6.png');
  images[6] = loadImage('Assets/7.png');
  images[7] = loadImage('Assets/8.png');
  images[8] = loadImage('Assets/9.png');
  images[9] = loadImage('Assets/10.png');

}

function setup() {
  let c = createCanvas(750, 750);
  c.parent("p5sketch");

  mgr = new SceneManager();

  mgr.addScene(Intro);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function keyPressed() {
  // You can optionaly handle the key press at global level...
  switch (key) {
    case '1':
      mgr.showScene(Intro);
      break;
    case '2':
      mgr.showScene(FindArtwork);
      break;
    case '3':
      mgr.showScene(NoPerm);
      break;
    case '4':
      mgr.showScene(YesPerm);
      break;
    case '5':
      mgr.showScene(Nope);
      break;
    case '6':
      mgr.showScene(GoAhead);
      break;
    case '7':
      mgr.showScene(ReallyWanna);
      break;
    case '8':
      mgr.showScene(CreditPlease);
      break;
    case '9':
      mgr.showScene(Comparison);
      break;
    case '10':
      mgr.showScene(Final);
      break;
  }
  // ... then dispatch via the SceneManager.
  mgr.handleEvent("keyPressed");
}

// DEFAULT BACKGROUND FOR EACH SCENE
function defaultBackground() {
  background(255, 94, 140);
  textSize(32);
  fill(255,255,255);
  textFont(defaultFont);
  text("Art Reposter",  width*0.38, height * 0.1);
}

// USE THIS METHOD TO DISPLAY A BODY OF TEXT
function textBody(txt){
  textSize(23);
  fill(255, 255, 255);
  text(txt,  width*0.15, height * 0.2, width * 0.8, height * 0.8);
}

// USE THIS METHOD TO DISPLAY INSTRUCTION TEXT
function instructText(txt){
  textSize(15);
  fill(28, 5, 17);
  text(txt,  width*0.4, height * 0.95, width * 0.8, height * 0.8);
}

// Intro scene constructor function
function Intro() {

  this.setup = function() {}

  this.draw = function() {
    defaultBackground();

    introText = "Welcome to Art Reposter!\n\n Today I will show you the online ettiquete for respecting art.";
    instText = "press 2 to continue";
    textBody(introText);

    instructText(instText);
    image(images[0], width*0.10, height*0.3, 600, 600);


  }
  this.keyPressed = function() {
    // switch the scene
    this.sceneManager.showScene(save);
  }
}

// Main games scene constructor function
function FindArtwork() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();findArtworkText = "Text part 2";
textBody(findArtworkText);
}
}

function NoPerm() {
  this.setup = function() {}

  this.draw = function() {
    background(0, 204, 0);
    defaultBackground();
    noPermText = "Text part 3";
    textBody(noPermText);
  }
}

function YesPerm() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}


function Nope() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}


function GoAhead() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}

function ReallyWanna() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}

function CreditPlease() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}

function Comparison() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}

function Final() {
  this.setup = function() {}

  this.draw = function() {
    background(255, 204, 0);
  }
}
