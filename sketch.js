var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie;
var body;
var hordeOfZombies


function preload(){
  
  shooterImg = loadImage("assets/knife.png")

  zombieImg = loadImage("assets/zombie.png")


  bgImg = loadImage("assets/1.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  hordeOfZombies = createGroup();

body = createSprite(100,100,10,10);
body.setCollider("rectangle",0,0,45,45)
body.debug = true

  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",130,0,50,100)


}

function draw() {
  background(220,220,220); 

 
  

  playerMovement();
  spawnZombie();

  
 player.pointTo(mouseX,mouseY);

body.x = player.x;
body.y = player.y;




//if(keyWentDown("space")){
 
  //player.addImage(shooter_shooting)
//}

if(player.isTouching(hordeOfZombies)){
  hordeOfZombies.destroyEach();
 }


//player rotation 

drawSprites();

}


function playerMovement(){
if(keyDown("d")){
  player.x = player.x + 10
}
if(keyDown("a")){
  player.x = player.x - 10
}
if(keyDown("s")){
  player.y = player.y + 10
}
if(keyDown("w")){
  player.y = player.y - 10
}
  
}


function spawnZombie(){
  var zombie = createSprite(60000,100000,40,10);
  if (frameCount % 60 === 0) {
   zombie.x = Math.round(random(10,displayWidth));
   zombie.y = Math.round(random(10,displayHeight));
   zombie.addImage(zombieImg)
   zombie.scale = 0.3;
   zombie.pointTo(player.x,player.y)
}
 hordeOfZombies.add(zombie);
} 
