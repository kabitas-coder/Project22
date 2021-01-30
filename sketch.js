var fairy,fairyImage;
var star, starImage;


function preload(){
  //preload the images here
  fairyImage = loadImage ("fairy.png,fairy1.png,fairy2.png");
  starImage = loadImage ("star.png,starnight.png");
}

function setup() {
  createCanvas(400,400);

  fairy = createSprite (50,390,10,10);
  fairy.addImage (fairyImage);
  fairy.scale = 0.5

  star = createSprite (390,390,10,10);
  star.addImage (starImage);
  star.scale = 0.5
}

function draw() {
  background("black");
}
