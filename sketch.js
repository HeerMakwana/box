var box


function setup() {
  createCanvas(600,600);
box=createSprite(300,300,50,50)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
box.x+=5
  }
if(keyIsDown(LEFT_ARROW)){
box.position.x-=5
}
drawSprites()
}




