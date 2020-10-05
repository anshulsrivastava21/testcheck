var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;

  if(isTouching(gameObject1,gameObject4)){
    gameObject1.shapeColor = "purple";
    gameObject4.shapeColor = "purple";
  }else{
    gameObject1.shapeColor = "aqua";
    gameObject4.shapeColor = "aqua";
  }

  drawSprites();
}

 