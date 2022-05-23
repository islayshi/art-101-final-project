function preload() {
  defaultFont = loadFont('Domine-Regular.ttf');
}

function setup() {
  let c = createCanvas(750, 750);
  c.parent("p5sketch");


    // first button
    repostThread = new Clickable(); //Create button
    repostThread.locate(width*0.34, height * 0.2); //Position Button
    repostThread.strokeWeight = 0;
    repostThread.textColor = "#801635";
    repostThread.textFont = defaultFont;
    repostThread.textSize = 17;
    repostThread.text = "Thread on reposting";
    repostThread.resize(250, 100);
    repostThread.onPress = function() { //When repostThread is pressed
      window.open("https://twitter.com/graphicfighter/status/1080964222064971777");
    }

    //second Button
    myInsta = new Clickable(); //Create button
    myInsta.locate(width*0.34, height * 0.4); //Position Button
    myInsta.strokeWeight = 0;
    myInsta.textColor = "#801635";
    myInsta.textFont = defaultFont;
    myInsta.textSize = 17;
    myInsta.text = "My Instagram";
    myInsta.resize(250, 100);
    myInsta.onPress = function() { //When myInsta is pressed
      window.open("https://www.instagram.com/slurp.noodles/");
    }

    //third button
    instaTakedown = new Clickable(); //Create button
    instaTakedown.locate(width*0.34, height * 0.6); //Position Button
    instaTakedown.strokeWeight = 0;
    instaTakedown.textColor = "#801635";
    instaTakedown.textFont = defaultFont;
    instaTakedown.textSize = 17;
    instaTakedown.text = "Someone repost your work?\n(Insta)";
    instaTakedown.resize(250, 100);
    instaTakedown.onPress = function() { //When instaTakedown is pressed
      window.open("https://help.instagram.com/454951664593304");
    }

}

function draw() {
  defaultBackground();
  repostThread.draw();
  myInsta.draw();
  instaTakedown.draw();

  textSize(23);
  fill(255, 255, 255);
  textAlign(CENTER);
  text("Remember, copyright can be on your side as a creator!", width * 0.15, height * 0.83, width * 0.75, height * 0.8);
}

// DEFAULT BACKGROUND FOR EACH SCENE
function defaultBackground() {
  background(255, 99, 159);
  textSize(32);
  fill(255, 255, 255);
  textFont(defaultFont);
  textAlign(CENTER);
  text("More Links!", width * 0.5, height * 0.1);
}

// USE THIS METHOD TO DISPLAY A BODY OF TEXT
function textBody(txt) {
  textSize(23);
  fill(255, 255, 255);
  textAlign(LEFT);
  text(txt, width * 0.15, height * 0.2, width * 0.75, height * 0.8);
}

// USE THIS METHOD TO DISPLAY INSTRUCTION TEXT
function instructText(txt) {
  textSize(15);
  fill(28, 5, 17);
  textAlign(CENTER);
  text(txt, width * 0.5, height * 0.95);

}
