var ball
var ballimage
var intervel=2
var score=0
function preload(){
ballimage = loadImage("circle.png")


}

function setup() {
createCanvas(windowWidth,windowHeight)
if (score%50==0) {
  intervel=intervel+0.1
}
}

function draw() {
background(0)

if (frameCount%(intervel*30)==0) {
  ball1()
}
if (mouseIsPressed) {
  ball.scale=0
  score=score+1
}
if (score>=1000) {
 fill("white")
 textSize(50)
 text("You win!",windowWidth/2, windowHeight/2)
 ball.scale=0
}
drawSprites();

textSize(24)
fill("white")
text("score-"+score, windowWidth-150, windowHeight/4)
textSize(30)
fill("white")
text("aim.txt", windowWidth/3, windowHeight/7)
text("reach 1000 points to win the game", windowWidth/3, windowHeight/9)
}

function ball1(){
  x=random(windowWidth/6,windowWidth-100)
  y=random(windowHeight/6,windowHeight-100)
  ball = createSprite(x,y,30,30)
  ball.addImage(ballimage)
  ball.scale=0.1
}

