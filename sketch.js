var zenia,tourus,cyclop;
 var wall,boundary1,boundary2;

function setup() {
  createCanvas(800,400);
  zenia=createSprite(100, 100, 40, 20)
  tourus=createSprite(100,200,40,20)
  cyclop=createSprite(100,300,40,20)

  wall=createSprite(500,200,40,300)

 boundary1=createSprite(465,150,100,20)
 boundary2=createSprite(465,250,100,20)


}

function draw() {
  background(0,0,0);  
  drawSprites();
  zenia.velocityX=5;
  cyclop.velocityX=5;
  tourus.velocityX=5;
  
  if (zenia.isTouching(wall)) {
   
    zenia.velocityX=0;
  }
  if (cyclop.isTouching(wall)) {
    
    cyclop.velocityX=0;
  }
  if (tourus.isTouching(wall)) {
    
    tourus.velocityX=0;
  }
  isTouching();

}
function isTouching() {
  if( zenia.x-wall.x<wall.width/2+zenia.width/2 && wall.x-zenia.x<wall.width/2+zenia.width/2 && zenia.y-wall.y<wall.height/2+zenia.height/2 && wall.y-zenia.y<wall.height/2+zenia.y-wall.y<wall.height/2+zenia.height/2 ){
    zenia.shapecolor=("red");
  }

  if( cyclop.x-wall.x<wall.width/2+cyclop.width/2 && wall.x-cyclop.x<wall.width/2+cyclop.width/2 && cyclop.y-wall.y<wall.height/2+cyclop.height/2 && wall.y-cyclop.y<wall.height/2+cyclop.y-wall.y<wall.height/2+cyclop.height/2 ){
  }
  if( tourus.x-wall.x<wall.width/2+tourus.width/2 && wall.x-tourus.x<wall.width/2+tourus.width/2 && tourus.y-wall.y<wall.height/2+tourus.height/2 && wall.y-tourus.y<wall.height/2+tourus.y-wall.y<wall.height/2+tourus.height/2 ){
  }

}