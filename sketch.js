var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(windowWidth/2,200);
path.addImage(pathImg);
path.velocityY = 6;


//creating boy running
boy = createSprite(width/2,height - 20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
endImage = createSprite(200,300,30,40);
//endImage.addImage("end",endImg);
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

  boy.visible = true;
  endImage.visible = false;
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+150;

    }else{
      if(swordGroup.isTouching(boy)) {
    
        boy.addAnimation("SahilRunning", endImg);
        boy.x = 200
        boy.y = 300
    

    jwelleryG.setVelocityEach(0)
    jwelleryG.destroyEach();

    diamondsG.setVelocityEach(0);
    diamondsG.destroyEach();

    cashG.setVelocityEach(0);
    cashG.destroyEach();

    swordGroup.setVelocityEach(0);
    swordGroup.destroyEach();

    path.velocity = 0;

    boy.visible = false;
    endImage.visible = true;
    endImage.scale = 2

    textSize(20);
    fill("black");
    text("Treasure: "+ treasureCollection,150,30);


    }
  }
  
  }else if(gameState===END){
    jwelleryG.setVelocityEach(0);
    jwelleryG.destroyEach();

    diamondsG.setVelocityEach(0);
    diamondsG.destroyEach();

    cashG.setVelocityEach(0);
    CashG.destroyEach();

    swordGroup.setVelocityEach(0);
    swordGroup.destroyEach();

    path.velocity = 0

    boy.addAnimation("SahilRunning", endImg);
    boy.x = 200
    boy.y = 300

  }

  

  drawSprites();

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 8;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 8;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 8;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 8;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}