var cookie = "Shake the device to reveal your fortune!"; //e Paolo Fox muto.
var quotes = ['run.', 'Ignore previous cookie.', 'I can\'t help you, I\'m just a cookie.', 'You look pretty :)', 'I see money in your future... it\'s not yours though.', 'Your pet is planning to eat you.', 'Get a beer.', ' meh.', 'ooops...wrong cookie!', '*insert wisdom here*', 'Don\'t be a dick :)', 'Don\'t cry, life is pain.'];
var inside = "";


function preload() {
  myImage = loadImage("./assets/back2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(150);
  frameRate(12);
}

function draw() {
  background('#F9F2DD');

  imageMode(CENTER);
  image(myImage, windowWidth / 2, windowHeight / 2, myImage.width / 10, myImage.height / 10);

  textSize(windowWidth / 22);
  fill('white');
  textAlign(CENTER);
  noStroke();
  text(cookie, windowWidth / 2, windowHeight / 8);
  fill('black');
  textSize(windowWidth / 30);
  text(inside, windowWidth / 2, (windowHeight / 3) - 20);
}

function deviceShaken() {
  var indexQuotes = floor(random() * quotes.length);
  inside = quotes[indexQuotes]; //index
}
