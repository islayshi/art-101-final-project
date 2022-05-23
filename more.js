function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myButton = new Clickable(); //Create button
  myButton.locate(20, 20); //Position Button
  myButton.onPress = function() { //When myButton is pressed
    //this.color = "#AAAAFF"; //Change button color
    //alert("Yay!"); //Show an alert message
    window.open("http://www.google.com");
  }
  myButton.draw();
}
